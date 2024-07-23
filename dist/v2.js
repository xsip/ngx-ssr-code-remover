"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeServerCode = removeServerCode;
exports.serveJsFromNoSsr = serveJsFromNoSsr;
const fs = __importStar(require("fs"));
const acorn = __importStar(require("acorn"));
const chalk_1 = __importDefault(require("chalk"));
function findAllComponentMetadata(inputFolder, file, sourceType) {
    var _a;
    const rawCode = fs.readFileSync(`${inputFolder}/${file}`, 'utf-8');
    const program = acorn.parse(rawCode, { ecmaVersion: 2022, sourceType });
    const components = [];
    let i = -1;
    for (const definition of program.body) {
        i++;
        if (definition.type !== 'VariableDeclaration')
            continue;
        if (definition.declarations[0].type !== 'VariableDeclarator' || ((_a = definition.declarations[0].init) === null || _a === void 0 ? void 0 : _a.type) !== 'ClassExpression')
            continue;
        const declarationCode = rawCode.substring(definition.start, definition.end);
        if (!declarationCode.includes('cmp'))
            continue;
        const className = definition.declarations[0].type === 'VariableDeclarator' ? definition.declarations[0].id.name : undefined;
        if (!className)
            continue;
        const classDefinition = definition.declarations[0].init;
        const selector = getSelector(classDefinition);
        if (!selector)
            continue;
        const methods = classDefinition.body.body.filter(fn => fn.type === 'MethodDefinition');
        if (!methods || !methods.length)
            continue;
        components.push({
            methods,
            className,
            classDefinition,
            selector: selector,
            index: i,
            file,
            decoratedMethodNames: findDecoratedFunctions(program, className, rawCode, file),
            allMethodNames: methods.map(method => method.key.name)
        });
    }
    return components;
}
function reloadComponentMetaFromFsForIndex(inputFolder, file, index, ignoreFns = [], sourceType) {
    var _a;
    const rawCode = fs.readFileSync(`${inputFolder}/${file}`, 'utf-8');
    const program = acorn.parse(rawCode, { ecmaVersion: 2022, sourceType });
    const definition = program.body[index];
    if (definition.type !== 'VariableDeclaration')
        return;
    if (definition.declarations[0].type !== 'VariableDeclarator' || ((_a = definition.declarations[0].init) === null || _a === void 0 ? void 0 : _a.type) !== 'ClassExpression')
        return;
    const declarationCode = rawCode.substring(definition.start, definition.end);
    if (!declarationCode.includes('cmp'))
        return;
    const className = definition.declarations[0].type === 'VariableDeclarator' ? definition.declarations[0].id.name : undefined;
    if (!className)
        return;
    const classDefinition = definition.declarations[0].init;
    const selector = getSelector(classDefinition);
    if (!selector)
        return;
    const methods = classDefinition.body.body.filter(fn => fn.type === 'MethodDefinition');
    if (!methods || !methods.length)
        return;
    return {
        methods,
        className,
        classDefinition,
        selector: selector,
        index,
        file,
        decoratedMethodNames: findDecoratedFunctions(program, className, rawCode, file).filter(method => !ignoreFns.includes(method)),
        allMethodNames: methods.map(method => method.key.name).filter(method => !ignoreFns.includes(method))
    };
}
function findDecoratedFunctions(program, inClass, rawCode, file) {
    const ssrFns = [];
    let i = 0;
    for (const definition of program.body) {
        if (rawCode.substring(definition.start, definition.end).includes('.RemoveOnServe')) {
            if (definition.type === 'ExpressionStatement') {
                const className = (definition.expression.arguments[1].object).name;
                if (className === inClass) {
                    ssrFns.push(definition.expression.arguments[2].value);
                }
            }
        }
        i++;
    }
    return ssrFns;
}
function getSelector(cls) {
    var _a;
    const selectorElement = cls.body.body.find(p => {
        if (p.type === 'PropertyDefinition' && p.static && p.key.type === 'Identifier') {
            return p.key.name === 'ɵcmp';
        }
        return false;
    });
    if (!selectorElement)
        return;
    if (((_a = selectorElement.value) === null || _a === void 0 ? void 0 : _a.type) !== 'CallExpression')
        return;
    const selectorArg = selectorElement.value.arguments[0].properties.find(arg => {
        if (arg.type === 'Property' && arg.key.type === 'Identifier' && arg.key.name === 'selectors') {
            return arg;
        }
        return false;
    });
    if (!selectorArg || selectorArg.value.type !== 'ArrayExpression')
        return;
    return selectorArg.value.elements[0].elements[0].value;
}
function removeCode(inputFolder, file, output, outputFolder, componentMetaList, doneMethods, logRemovedCode, sourceType) {
    var _a;
    let rawFile = fs.readFileSync(inputFolder + '/' + file, 'utf-8');
    let firstIteration = true;
    for (const _matchingComponentMeta of componentMetaList) {
        let matchingComponentMeta = _matchingComponentMeta;
        if (!firstIteration) {
            // reload duo the position change on removing code.
            matchingComponentMeta = reloadComponentMetaFromFsForIndex(outputFolder, file, _matchingComponentMeta.index, doneMethods[_matchingComponentMeta.className], sourceType);
        }
        firstIteration = false;
        for (const ssrMethod of matchingComponentMeta.decoratedMethodNames) {
            const fn = matchingComponentMeta.methods.find(method => method.key.name === ssrMethod);
            const fnBody = fn.value.body.body[0];
            if (!fnBody || ((_a = doneMethods[matchingComponentMeta.className]) === null || _a === void 0 ? void 0 : _a.includes(ssrMethod))) {
                console.log(chalk_1.default.red(`Already done ${ssrMethod}`));
                continue;
            }
            const fnLength = (fnBody === null || fnBody === void 0 ? void 0 : fnBody.end) - (fnBody === null || fnBody === void 0 ? void 0 : fnBody.start);
            console.log(chalk_1.default.blue(`Removing '${chalk_1.default.blueBright(chalk_1.default.italic(ssrMethod))}' in component with selector '${chalk_1.default.blueBright(chalk_1.default.italic(matchingComponentMeta.selector))}' ( ${file} | ${fnLength} lines of code)`));
            const originalCode = rawFile.substring(fnBody.start, fnBody.end);
            logRemovedCode && console.log(chalk_1.default.green.italic.bgWhite(originalCode));
            rawFile = rawFile.replace(originalCode, '');
            fs.writeFileSync(output, rawFile, 'utf-8');
            !doneMethods[matchingComponentMeta.className] ? doneMethods[matchingComponentMeta.className] = [ssrMethod] : doneMethods[matchingComponentMeta.className].push(ssrMethod);
            // reload duo the position change on removing code.
            matchingComponentMeta = reloadComponentMetaFromFsForIndex(outputFolder, file, matchingComponentMeta.index, doneMethods[matchingComponentMeta.className], sourceType);
        }
    }
}
function removeServerCode(inputFolder, logRemovedCode = false, sourceType = 'module') {
    console.log(chalk_1.default.green('Starting processor'));
    console.log(chalk_1.default.green(new Date()), '\n');
    try {
        if (fs.existsSync(inputFolder + '/../no-ssr-code'))
            fs.rmdirSync(inputFolder + '/../no-ssr-code', { recursive: true });
        fs.mkdirSync(inputFolder + '/../no-ssr-code');
        console.log(chalk_1.default.green('Created \'no-ssr-code\' folder.'));
        const files = fs.readdirSync(inputFolder).filter(f => f.endsWith('.js') && !f.includes('polyfills'));
        for (const file of files) {
            console.log(chalk_1.default.green(`Processing ${file}\n`));
            const components = findAllComponentMetadata(inputFolder, file, sourceType);
            // fs.writeFileSync('./meta.json', JSON.stringify(components, null, 2));
            removeCode(inputFolder, `${file}`, `${inputFolder}/../no-ssr-code/${file}`, `${inputFolder}/../no-ssr-code/`, components, {}, logRemovedCode, sourceType);
        }
        console.log(chalk_1.default.green('\nEnding processor with success'));
        console.log(chalk_1.default.green(new Date()), '\n');
        return true;
    }
    catch (e) {
        console.log(chalk_1.default.green('\nEnding processor with error'));
        console.log(chalk_1.default.green(new Date()), '\n');
        console.log(e);
        return false;
    }
}
// console.log(`${file} pre processing size: ${fs.statSync(`${inputFolder}/${file}`).size / (1024*1024)}mb`);
function serveJsFromNoSsr(server, browserDistFolder) {
    server.get(/(.*?).js/i, (req, res) => {
        if (req.path.endsWith('.js.map')) {
            res.status(401).send('Unauthorized');
            return;
        }
        try {
            const content = fs.readFileSync(`${browserDistFolder}/../no-ssr-code${req.path}`, 'utf8');
            res.type('js').send(content);
        }
        catch (e) {
            const content = fs.readFileSync(`${browserDistFolder}${req.path}`, 'utf8');
            res.type('js').send(content);
        }
    });
}
// removeServerCode('../dist/noahsarc-v2/browser', true, 'module')
//# sourceMappingURL=v2.js.map