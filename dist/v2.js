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
function findRemoveOnServeDecoratorDefinitionOrFns(program, rawCode) {
    const ssrFns = [];
    for (const definition of program.body) {
        if (rawCode.substring(definition.start, definition.end).includes('.RemoveOnServe')) {
            if (definition.type === "FunctionDeclaration") {
                return { definition, ssrFns: undefined };
            }
            if (definition.type === 'ExpressionStatement') {
                ssrFns.push({
                    className: (definition.expression.arguments[1].object).name,
                    fnName: definition.expression.arguments[2].value
                });
            }
        }
    }
    return { definition: undefined, ssrFns };
}
function resolveDecoratorDefinitionOrFns(inputFolder, files) {
    var _a;
    for (const file of files) {
        const fileData = fs.readFileSync(`${inputFolder}/${file}`, 'utf-8');
        const program = acorn.parse(fileData, { ecmaVersion: 2022 });
        console.log(chalk_1.default.green(`Searching in ${file}`));
        const _decoratorDefinition = findRemoveOnServeDecoratorDefinitionOrFns(program, fileData);
        if (_decoratorDefinition.definition || ((_a = _decoratorDefinition.ssrFns) === null || _a === void 0 ? void 0 : _a.length) > 0) {
            return _decoratorDefinition;
        }
    }
    return undefined;
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
function removeSsrFnBody(file, output, decoratedFns, doneMethods) {
    var _a, _b;
    let fileData = fs.readFileSync(file, 'utf-8');
    const program = acorn.parse(fileData, { ecmaVersion: 2022 });
    for (const definition of program.body) {
        // console.log(definition);
        if (definition.type === 'VariableDeclaration' /*&& definition.declarations.find(dec => dec.id.name === 'xn')*/) {
            if (definition.declarations[0].type === 'VariableDeclarator' && ((_a = definition.declarations[0].init) === null || _a === void 0 ? void 0 : _a.type) === "ClassExpression") {
                const cls = definition.declarations[0].init;
                const selector = getSelector(cls);
                // @ts-ignore
                const clsName = definition.declarations[0].type === 'VariableDeclarator' ? definition.declarations[0].id.name : undefined;
                if (!clsName) {
                    console.log(chalk_1.default.red(`Can't resolve classname`));
                    continue;
                }
                const methods = cls.body.body.filter(fn => fn.type === 'MethodDefinition');
                const ssrMethods = methods.filter(fn => decoratedFns.find(dFn => dFn.fnName === fn.key.name && dFn.className === clsName));
                // console.log(ssrMethods);
                for (const ssrMethod of ssrMethods) {
                    const fnBody = ssrMethod.value.body.body[0];
                    const fnName = ssrMethod.key.name;
                    if (!fnBody || ((_b = doneMethods[clsName]) === null || _b === void 0 ? void 0 : _b.includes(fnName)))
                        continue;
                    const fnLength = (fnBody === null || fnBody === void 0 ? void 0 : fnBody.end) - (fnBody === null || fnBody === void 0 ? void 0 : fnBody.start);
                    console.log(chalk_1.default.blue(`Removing '${chalk_1.default.blueBright(chalk_1.default.italic(fnName))}' in component with selector '${chalk_1.default.blueBright(chalk_1.default.italic(selector))}' (${fnLength} lines of code)`));
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
function removeServerCode(inputFolder) {
    var _a, _b;
    if (fs.existsSync(inputFolder + '/../no-ssr-code')) {
        fs.rmdirSync(inputFolder + '/../no-ssr-code', { recursive: true });
    }
    fs.mkdirSync(inputFolder + '/../no-ssr-code');
    const files = fs.readdirSync(inputFolder).filter(f => f.endsWith('.js') && !f.includes('polyfills'));
    const decoratorDefinition = resolveDecoratorDefinitionOrFns(inputFolder, files);
    if (!decoratorDefinition)
        throw new Error(`Couldn't resolve "RemoveOnServe" decorator in your bundled files...`);
    // console.log(decoratorDefinition.ssrFns)
    const decoratorFunctions = (_b = (_a = decoratorDefinition.ssrFns) === null || _a === void 0 ? void 0 : _a.filter((dfn, i, a) => {
        return a.findIndex(dfn2 => dfn2.fnName === dfn.fnName && dfn2.className === dfn.className) === i;
    })) !== null && _b !== void 0 ? _b : [];
    for (const file of files) {
        // console.log(`${file} pre processing size: ${fs.statSync(`${inputFolder}/${file}`).size / (1024*1024)}mb`);
        removeSsrFnBody(`${inputFolder}/${file}`, `${inputFolder}/../no-ssr-code/${file}`, decoratorFunctions, {});
        // console.log(`${file} post processing size: ${fs.statSync(`${inputFolder}/../no-ssr-code/${file}`).size / (1024*1024)}mb`);
    }
}
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
// removeServerCode('../dist/noahsarc-v2/browser')
//# sourceMappingURL=v2.js.map