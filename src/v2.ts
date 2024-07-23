import * as fs from 'fs';
import * as acorn from 'acorn';
import express from "express";
import {default as chalk} from 'chalk';

function findRemoveOnServeDecoratorDefinitionOrFns(program: acorn.Program, rawCode: string) {
    const ssrFns: { className: string; fnName: string }[] = [];
    for (const definition of program.body) {
        if (rawCode.substring(definition.start, definition.end).includes('.RemoveOnServe')) {

            if (definition.type === "FunctionDeclaration") {
                return {definition, ssrFns: undefined};
            }
            if (definition.type === 'ExpressionStatement') {
                ssrFns.push({
                    className: ((((definition.expression as acorn.CallExpression).arguments[1] as acorn.MemberExpression).object) as acorn.Identifier).name as string,
                    fnName: ((definition.expression as acorn.CallExpression).arguments[2] as acorn.Literal).value as string
                });
            }
        }
    }
    return {definition: undefined, ssrFns};
}

function resolveDecoratorDefinitionOrFns(inputFolder: string, files: string[]) {
    for (const file of files) {
        const fileData = fs.readFileSync(`${inputFolder}/${file}`, 'utf-8');
        const program = acorn.parse(fileData, {ecmaVersion: 2022});
        console.log(chalk.green(`Searching in ${file}`));
        const _decoratorDefinition = findRemoveOnServeDecoratorDefinitionOrFns(program, fileData)
        if (_decoratorDefinition.definition || _decoratorDefinition.ssrFns?.length > 0) {
            return _decoratorDefinition;
        }
    }
    return undefined;
}

interface DoneMethods {
    [index: string]: string[];
}

function getSelector(cls: acorn.ClassExpression) {
    const selectorElement = cls.body.body.find(p => {
        if (p.type === 'PropertyDefinition' && p.static && p.key.type === 'Identifier') {
            return p.key.name === 'ɵcmp';
        }
        return false;
    }) as acorn.PropertyDefinition;

    if (!selectorElement)
        return;

    if (selectorElement.value?.type !== 'CallExpression')
        return;

    const selectorArg = (selectorElement.value.arguments[0] as acorn.ObjectExpression).properties.find(arg => {
        if (arg.type === 'Property' && arg.key.type === 'Identifier' && arg.key.name === 'selectors') {
            return arg;
        }
        return false;
    }) as acorn.Property;
    if (!selectorArg || selectorArg.value.type !== 'ArrayExpression')
        return;

    return ((selectorArg.value.elements[0] as acorn.ArrayExpression).elements[0] as acorn.Literal).value;

}

function removeSsrFnBody(file: string, output: string, decoratedFns: {
    className: string,
    fnName: string
}[], doneMethods: DoneMethods) {
    let fileData = fs.readFileSync(file, 'utf-8');
    const program = acorn.parse(fileData, {ecmaVersion: 2022});
    for (const definition of program.body) {
        // console.log(definition);
        if (definition.type === 'VariableDeclaration' /*&& definition.declarations.find(dec => dec.id.name === 'xn')*/) {
            if (definition.declarations[0].type === 'VariableDeclarator' && definition.declarations[0].init?.type === "ClassExpression") {
                const cls = definition.declarations[0].init;
                const selector = getSelector(cls);

                // @ts-ignore
                const clsName: string | undefined = definition.declarations[0].type === 'VariableDeclarator' ? definition.declarations[0].id!.name : undefined;
                if (!clsName) {
                    console.log(chalk.red(`Can't resolve classname`));
                    continue;
                }
                const methods = (cls as acorn.ClassExpression).body.body.filter(fn => fn.type === 'MethodDefinition') as acorn.MethodDefinition[];
                const ssrMethods = methods.filter(fn => decoratedFns.find(dFn => dFn.fnName === (fn.key as acorn.Identifier).name && dFn.className === clsName));
                // console.log(ssrMethods);
                for (const ssrMethod of ssrMethods) {
                    const fnBody = ssrMethod.value.body.body[0];
                    const fnName = (ssrMethod.key as acorn.Identifier).name;
                    if (!fnBody || doneMethods[clsName]?.includes(fnName))
                        continue;
                    const fnLength = fnBody?.end - fnBody?.start;
                    console.log(chalk.blue(`Removing '${chalk.blueBright(chalk.italic(fnName))}' in component with selector '${chalk.blueBright(chalk.italic(selector))}' (${fnLength} lines of code)`));

                    const originalCode = fileData.substring(fnBody.start, fnBody.end);
                    fileData = fileData.replace(originalCode, '');
                    // doneMethods.push((ssrMethod.key as acorn.Identifier).name);
                    fs.writeFileSync(output, fileData, 'utf-8');
                    !doneMethods[clsName] ? doneMethods[clsName] = [fnName] : doneMethods[clsName].push(fnName);
                    removeSsrFnBody(output, output, decoratedFns, doneMethods);
                    break;
                }
                // fs.writeFileSync('./exp.json', JSON.stringify(ssrMethods, null, 2), 'utf-8')
            }
        }
    }
}

export function removeServerCode(inputFolder: string) {

    try {


        if (fs.existsSync(inputFolder + '/../no-ssr-code')) {
            fs.rmdirSync(inputFolder + '/../no-ssr-code', {recursive: true});
        }
        fs.mkdirSync(inputFolder + '/../no-ssr-code');

        const files = fs.readdirSync(inputFolder).filter(f => f.endsWith('.js') && !f.includes('polyfills'));
        const decoratorDefinition = resolveDecoratorDefinitionOrFns(inputFolder, files);

        if (!decoratorDefinition)
            throw new Error(`Couldn't resolve "RemoveOnServe" decorator in your bundled files...`);

        // console.log(decoratorDefinition.ssrFns)
        const decoratorFunctions = decoratorDefinition.ssrFns?.filter((dfn, i, a) => {
            return a.findIndex(dfn2 => dfn2.fnName === dfn.fnName && dfn2.className === dfn.className) === i;
        }) ?? [];

        for (const file of files) {
            // console.log(`${file} pre processing size: ${fs.statSync(`${inputFolder}/${file}`).size / (1024*1024)}mb`);
            removeSsrFnBody(`${inputFolder}/${file}`, `${inputFolder}/../no-ssr-code/${file}`, decoratorFunctions, {});
            // console.log(`${file} post processing size: ${fs.statSync(`${inputFolder}/../no-ssr-code/${file}`).size / (1024*1024)}mb`);

        }
        return true;
    } catch (e) {
        return false;
    }
}


export function serveJsFromNoSsr(server: express.Express, browserDistFolder: string) {
    server.get(/(.*?).js/i, (req: express.Request, res: express.Response) => {
        if (req.path.endsWith('.js.map')) {
            res.status(401).send('Unauthorized');
            return;
        }
        try {


            const content = fs.readFileSync(`${browserDistFolder}/../no-ssr-code${req.path}`, 'utf8');
            res.type('js').send(content);
        } catch (e) {
            const content = fs.readFileSync(`${browserDistFolder}${req.path}`, 'utf8');
            res.type('js').send(content);
        }
    })
}

// removeServerCode('../dist/noahsarc-v2/browser')
