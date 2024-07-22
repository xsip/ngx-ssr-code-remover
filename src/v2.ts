import * as fs from 'fs';
import * as acorn from 'acorn';
import "reflect-metadata";
import express from "express";



function findRemoveOnServeDecoratorDefinition(program: acorn.Program, rawCode: string) {
    for (const definition of program.body) {
        if (definition.type === "FunctionDeclaration") {
            if (rawCode.substring(definition.start, definition.end).includes('remove-on-serve')) {
                return definition;
            }
        }
    }
    return undefined;
}

function resolveDecoratorDefinition(inputFolder: string, files: string[]) {
    for (const file of files) {
        const fileData = fs.readFileSync(`${inputFolder}/${file}`, 'utf-8');
        const program = acorn.parse(fileData, {ecmaVersion: 2022});
        const _decoratorDefinition = findRemoveOnServeDecoratorDefinition(program, fileData)
        if (_decoratorDefinition) {
            return _decoratorDefinition;
        }
    }
}

function getDecoratedFunctions(inputFolder: string, files: string[], decoratorDefinition: acorn.FunctionDeclaration) {
    const decoratedFns: string[] = [];
    for (const file of files) {
        const fileData = fs.readFileSync(`${inputFolder}/${file}`, 'utf-8');
        const program = acorn.parse(fileData, {ecmaVersion: 2022});
        for (const definition of program.body) {
            // @ts-ignore
            if (definition.type === 'ExpressionStatement' && definition.expression.type === 'CallExpression') {
                // && (definition.expression as acorn.CallExpression).callee.name === (decoratorDefinition as acorn.FunctionDeclaration).id.name
                const def = definition as acorn.ExpressionStatement;
                const ex = definition.expression as acorn.CallExpression;
                const isRightCall = !!ex.arguments.find(arg => {
                    return (((arg as acorn.ArrayExpression).elements?.[0] as acorn.CallExpression)?.callee as acorn.Identifier)?.name === (decoratorDefinition as acorn.FunctionDeclaration).id.name;

                })
                if (isRightCall) {
                    decoratedFns.push((ex.arguments[2] as acorn.Literal).value as string);
                }
                // decoratedFns.push(definition);
            }
        }
    }
    return decoratedFns;
}


function removeSsrFnBody(file: string, output: string, decoratedFns: string[], doneMethods: string[] = []) {
    let fileData = fs.readFileSync(file, 'utf-8');
    const program = acorn.parse(fileData, {ecmaVersion: 2022});
    for (const definition of program.body) {
        // console.log(definition);
        // @ts-ignore
        if (definition.type === 'VariableDeclaration' /*&& definition.declarations.find(dec => dec.id.name === 'xn')*/) {
            if (definition.declarations[0].type === 'VariableDeclarator' && definition.declarations[0].init?.type === "ClassExpression") {
                const cls = definition.declarations[0].init;
                const methods = (cls as acorn.ClassExpression).body.body.filter(fn => fn.type === 'MethodDefinition') as acorn.MethodDefinition[];
                const ssrMethods = methods.filter(fn => decoratedFns.includes((fn.key as acorn.Identifier).name));
                // console.log(ssrMethods);
                for(const ssrMethod of ssrMethods) {
                    const fnBody = ssrMethod.value.body.body[0];
                    console.log((ssrMethod.key as acorn.Identifier).name);
                    if(doneMethods.includes((ssrMethod.key as acorn.Identifier).name) || !fnBody)
                        continue;
                    const fnLength = fnBody?.end - fnBody?.start;
                    const originalCode = fileData.substring(fnBody.start, fnBody.end);
                    fileData = fileData.replace(originalCode, '');
                    doneMethods.push((ssrMethod.key as acorn.Identifier).name);
                    fs.writeFileSync(output, fileData, 'utf-8');
                    removeSsrFnBody(output, output, decoratedFns,doneMethods);
                    break;
                }
                // fs.writeFileSync('./exp.json', JSON.stringify(ssrMethods, null, 2), 'utf-8')
            }
        }
    }
}

export function removeServerCode(inputFolder: string) {
    const files = fs.readdirSync(inputFolder).filter(f => f.endsWith('.js') && !f.includes('polyfills'));
    const decoratorDefinition = resolveDecoratorDefinition(inputFolder,files);

    if(!decoratorDefinition)
        throw new Error(`Couldn't resolve "RemoveOnServe" decorator in your bundled files...`);

    const decoratorFunctions = getDecoratedFunctions(inputFolder,files, decoratorDefinition);
    for (const file of files) {
        removeSsrFnBody(`${inputFolder}/${file}`, `${inputFolder}/../no-ssr-code/${file}`,decoratorFunctions,[]);
    }
}



export function serveJsFromNoSsr(server: express.Express, browserDistFolder: string) {
    server.get(/(.*?).js/i, (req: express.Request, res: express.Response) => {
        if (req.path.endsWith('.js.map')) {
            res.status(401).send('Unauthorized');
            return;
        }
        const content = fs.readFileSync(`${browserDistFolder}/../no-ssr-code${req.path}`, 'utf8');
        res.type('js').send(content);
    })
}
