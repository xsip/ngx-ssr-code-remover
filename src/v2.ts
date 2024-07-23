import * as fs from 'fs';
import * as acorn from 'acorn';
import express from 'express';
import {default as chalk} from 'chalk';


type ComponentMeta = {
    methods: acorn.MethodDefinition[];
    decoratedMethodNames: string[];
    allMethodNames: string[];
    classDefinition: acorn.ClassExpression;
    className: string;
    selector: string;
    file: string;
    index: number;
}

function findAllComponentMetadata(inputFolder: string, file: string, sourceType?: 'script' | 'module') {
    const rawCode = fs.readFileSync(`${inputFolder}/${file}`, 'utf-8');
    const program = acorn.parse(rawCode, {ecmaVersion: 2022, sourceType});
    const components: ComponentMeta[] = [];
    let i = -1;
    for (const definition of program.body) {
        i++;
        if (definition.type !== 'VariableDeclaration')
            continue;
        if (definition.declarations[0].type !== 'VariableDeclarator' || definition.declarations[0].init?.type !== 'ClassExpression')
            continue;
        const declarationCode = rawCode.substring(definition.start, definition.end);
        if (!declarationCode.includes('cmp'))
            continue;

        const className = definition.declarations[0].type === 'VariableDeclarator' ? (definition.declarations[0].id as acorn.Identifier)!.name : undefined;
        if (!className)
            continue;
        const classDefinition = definition.declarations[0].init as acorn.ClassExpression;
        const selector = getSelector(classDefinition);

        if (!selector)
            continue;

        const methods = classDefinition.body.body.filter(fn => fn.type === 'MethodDefinition') as acorn.MethodDefinition[];

        if (!methods || !methods.length)
            continue;

        console.log(chalk.green(`Found component '${chalk.italic(selector)}'`));
        components.push({
            methods,
            className,
            classDefinition,
            selector: selector as string,
            index: i,
            file,
            decoratedMethodNames: findDecoratedFunctions(program, className, rawCode, file),
            allMethodNames: methods.map(method => (method.key as acorn.Identifier).name)
        });

    }
    return components;
}

function reloadComponentMetaFromFsForIndex(inputFolder: string, file: string, index: number, ignoreFns: string[] = [], sourceType?: 'script' | 'module') {
    const rawCode = fs.readFileSync(`${inputFolder}/${file}`, 'utf-8');
    const program = acorn.parse(rawCode, {ecmaVersion: 2022, sourceType});
    const definition = program.body[index];

    if (definition.type !== 'VariableDeclaration')
        return;

    if (definition.declarations[0].type !== 'VariableDeclarator' || definition.declarations[0].init?.type !== 'ClassExpression')
        return;

    const declarationCode = rawCode.substring(definition.start, definition.end);
    if (!declarationCode.includes('cmp'))
        return;

    const className = definition.declarations[0].type === 'VariableDeclarator' ? (definition.declarations[0].id as acorn.Identifier)!.name : undefined;
    if (!className)
        return;

    const classDefinition = definition.declarations[0].init as acorn.ClassExpression;
    const selector = getSelector(classDefinition);

    if (!selector)
        return;

    const methods = classDefinition.body.body.filter(fn => fn.type === 'MethodDefinition') as acorn.MethodDefinition[];

    if (!methods || !methods.length)
        return;
    return {
        methods,
        className,
        classDefinition,
        selector: selector as string,
        index,
        file,
        decoratedMethodNames: findDecoratedFunctions(program, className, rawCode, file).filter(method => !ignoreFns.includes(method)),
        allMethodNames: methods.map(method => (method.key as acorn.Identifier).name).filter(method => !ignoreFns.includes(method))
    };
}

function findDecoratedFunctions(program: acorn.Program, inClass: string, rawCode: string, file: string) {
    const ssrFns: string[] = [];
    let i = 0;
    for (const definition of program.body) {

        if (rawCode.substring(definition.start, definition.end).includes('.RemoveOnServe')) {
            if (definition.type === 'ExpressionStatement') {

                const className = ((((definition.expression as acorn.CallExpression).arguments[1] as acorn.MemberExpression).object) as acorn.Identifier).name as string;
                if (className === inClass) {
                    ssrFns.push(((definition.expression as acorn.CallExpression).arguments[2] as acorn.Literal).value as string);
                }
            }
        }
        i++;
    }
    return ssrFns;
}

type DoneMethods = {
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

function removeCode(inputFolder: string, file: string, output: string, outputFolder: string, componentMetaList: ComponentMeta[], doneMethods: DoneMethods, logRemovedCode: boolean, sourceType?: 'script' | 'module') {
    let rawFile = fs.readFileSync(inputFolder+'/'+file, 'utf-8');
    let firstIteration = true;
    for (const _matchingComponentMeta of componentMetaList) {
        let  matchingComponentMeta = _matchingComponentMeta;
        if(!firstIteration) {
            // reload duo the position change on removing code.
            matchingComponentMeta = reloadComponentMetaFromFsForIndex(outputFolder,file, _matchingComponentMeta.index, doneMethods[_matchingComponentMeta.className],sourceType) as unknown as ComponentMeta;
        }
        firstIteration = false;
        for (const ssrMethod of matchingComponentMeta.decoratedMethodNames) {
            const fn = matchingComponentMeta.methods.find(method => (method.key as acorn.Identifier).name === ssrMethod)!;
            const fnBody = fn.value.body.body[0];
            if (!fnBody || doneMethods[matchingComponentMeta.className]?.includes(ssrMethod)) {
                console.log(chalk.red(`Already done ${ssrMethod}`));
                continue;
            }
            const fnLength = fnBody?.end - fnBody?.start;

            console.log(chalk.blue(`Removing '${chalk.blueBright(chalk.italic(ssrMethod))}' in component with selector '${chalk.blueBright(chalk.italic(matchingComponentMeta.selector))}' ( ${file} | ${fnLength} lines of code)`));

            const originalCode = rawFile.substring(fnBody.start, fnBody.end);
            logRemovedCode && console.log(chalk.green.italic.bgWhite(originalCode));
            rawFile = rawFile.replace(originalCode, '');
            fs.writeFileSync(output, rawFile, 'utf-8');
            !doneMethods[matchingComponentMeta.className] ? doneMethods[matchingComponentMeta.className] = [ssrMethod] : doneMethods[matchingComponentMeta.className].push(ssrMethod);
            // reload duo the position change on removing code.
            matchingComponentMeta = reloadComponentMetaFromFsForIndex(outputFolder,file, matchingComponentMeta.index, doneMethods[matchingComponentMeta.className], sourceType) as unknown as ComponentMeta;
        }
    }
}


export function removeServerCode(inputFolder: string, logRemovedCode = false, sourceType: 'script' | 'module' = 'module') {

    console.log(chalk.green('Starting processor'));
    console.log(chalk.green(new Date()),'\n');
    try {
        if (fs.existsSync(inputFolder + '/../no-ssr-code'))
            fs.rmdirSync(inputFolder + '/../no-ssr-code', {recursive: true});

        fs.mkdirSync(inputFolder + '/../no-ssr-code');
        console.log(chalk.green('Created \'no-ssr-code\' folder.'));

        const files = fs.readdirSync(inputFolder).filter(f => f.endsWith('.js') && !f.includes('polyfills'));

        for (const file of files) {
            console.log(chalk.green(`Processing ${file}\n`));
            const components = findAllComponentMetadata(inputFolder, file, sourceType);
            // fs.writeFileSync('./meta.json', JSON.stringify(components, null, 2));
            removeCode(inputFolder, `${file}`, `${inputFolder}/../no-ssr-code/${file}`, `${inputFolder}/../no-ssr-code/`, components, {}, logRemovedCode,sourceType);

        }
        console.log(chalk.green('\nEnding processor with success'));
        console.log(chalk.green(new Date()),'\n');
        return true;

    } catch (e) {
        console.log(chalk.green('\nEnding processor with error'));
        console.log(chalk.green(new Date()),'\n');
        console.log(e);
        return false;
    }

}

// console.log(`${file} pre processing size: ${fs.statSync(`${inputFolder}/${file}`).size / (1024*1024)}mb`);


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
    });
}

// removeServerCode('../dist/test-project-v2/browser', true, 'module')
