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
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeServerCode = removeServerCode;
exports.RemoveOnServe = RemoveOnServe;
const fs = __importStar(require("fs"));
const acorn = __importStar(require("acorn"));
require("reflect-metadata");
function findRemoveOnServeDecoratorDefinition(program, rawCode) {
    for (const definition of program.body) {
        if (definition.type === "FunctionDeclaration") {
            if (rawCode.substring(definition.start, definition.end).includes('remove-on-serve')) {
                return definition;
            }
        }
    }
    return undefined;
}
function resolveDecoratorDefinition(inputFolder, files) {
    for (const file of files) {
        const fileData = fs.readFileSync(`${inputFolder}/${file}`, 'utf-8');
        const program = acorn.parse(fileData, { ecmaVersion: 2022 });
        const _decoratorDefinition = findRemoveOnServeDecoratorDefinition(program, fileData);
        if (_decoratorDefinition) {
            return _decoratorDefinition;
        }
    }
}
function getDecoratedFunctions(inputFolder, files, decoratorDefinition) {
    const decoratedFns = [];
    for (const file of files) {
        const fileData = fs.readFileSync(`${inputFolder}/${file}`, 'utf-8');
        const program = acorn.parse(fileData, { ecmaVersion: 2022 });
        for (const definition of program.body) {
            // @ts-ignore
            if (definition.type === 'ExpressionStatement' && definition.expression.type === 'CallExpression') {
                // && (definition.expression as acorn.CallExpression).callee.name === (decoratorDefinition as acorn.FunctionDeclaration).id.name
                const def = definition;
                const ex = definition.expression;
                const isRightCall = !!ex.arguments.find(arg => {
                    var _a, _b, _c;
                    return ((_c = (_b = (_a = arg.elements) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.callee) === null || _c === void 0 ? void 0 : _c.name) === decoratorDefinition.id.name;
                });
                if (isRightCall) {
                    decoratedFns.push(ex.arguments[2].value);
                }
                // decoratedFns.push(definition);
            }
        }
    }
    return decoratedFns;
}
function removeSsrFnBody(file, output, decoratedFns, doneMethods = []) {
    var _a;
    let fileData = fs.readFileSync(file, 'utf-8');
    const program = acorn.parse(fileData, { ecmaVersion: 2022 });
    for (const definition of program.body) {
        // console.log(definition);
        // @ts-ignore
        if (definition.type === 'VariableDeclaration' /*&& definition.declarations.find(dec => dec.id.name === 'xn')*/) {
            if (definition.declarations[0].type === 'VariableDeclarator' && ((_a = definition.declarations[0].init) === null || _a === void 0 ? void 0 : _a.type) === "ClassExpression") {
                const cls = definition.declarations[0].init;
                const methods = cls.body.body.filter(fn => fn.type === 'MethodDefinition');
                const ssrMethods = methods.filter(fn => decoratedFns.includes(fn.key.name));
                // console.log(ssrMethods);
                for (const ssrMethod of ssrMethods) {
                    const fnBody = ssrMethod.value.body.body[0];
                    console.log(ssrMethod.key.name);
                    if (doneMethods.includes(ssrMethod.key.name) || !fnBody)
                        continue;
                    const fnLength = (fnBody === null || fnBody === void 0 ? void 0 : fnBody.end) - (fnBody === null || fnBody === void 0 ? void 0 : fnBody.start);
                    const originalCode = fileData.substring(fnBody.start, fnBody.end);
                    fileData = fileData.replace(originalCode, '');
                    doneMethods.push(ssrMethod.key.name);
                    fs.writeFileSync(output, fileData, 'utf-8');
                    removeSsrFnBody(output, output, decoratedFns, doneMethods);
                    break;
                }
                // fs.writeFileSync('./exp.json', JSON.stringify(ssrMethods, null, 2), 'utf-8')
            }
        }
    }
}
function removeServerCode(inputFolder) {
    const files = fs.readdirSync(inputFolder).filter(f => f.endsWith('.js') && !f.includes('polyfills'));
    const decoratorDefinition = resolveDecoratorDefinition(inputFolder, files);
    if (!decoratorDefinition)
        throw new Error(`Couldn't resolve "RemoveOnServe" decorator in your bundled files...`);
    const decoratorFunctions = getDecoratedFunctions(inputFolder, files, decoratorDefinition);
    for (const file of files) {
        removeSsrFnBody(`${inputFolder}/${file}`, `${inputFolder}/../no-ssr-code/${file}`, decoratorFunctions, []);
    }
}
function RemoveOnServe() {
    return (target, propertyKey, descriptor) => {
        Reflect.defineMetadata("remove-on-serve", true, target, propertyKey);
    };
}
//# sourceMappingURL=v2.js.map