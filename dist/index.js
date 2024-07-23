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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeSsrCodeV3 = exports.removeSsrCodeV2 = void 0;
exports.removeServerCode = removeServerCode;
exports.removeBrowserCodeFromContent = removeBrowserCodeFromContent;
exports.serveJsFromNoSsr = serveJsFromNoSsr;
const fs = __importStar(require("fs"));
const [, , _inputFolder] = process.argv;
exports.removeSsrCodeV2 = __importStar(require("./v2"));
exports.removeSsrCodeV3 = __importStar(require("./v3"));
function removeServerCode() {
    return __awaiter(this, arguments, void 0, function* (serverCodeFunctionPrefix = 'serverCode', browserDistFolder) {
        const outputFolder = browserDistFolder + '/../browserNoServerSideCode';
        const files = fs.readdirSync(browserDistFolder);
        for (const file of files) {
            if (file.endsWith('.js')) {
                const content = removeBrowserCodeFromContent(serverCodeFunctionPrefix, fs.readFileSync(browserDistFolder + '/' + file, 'utf-8'));
                if (!fs.existsSync(outputFolder)) {
                    fs.mkdirSync(outputFolder);
                }
                // fs.writeFileSync('../dist/wysiwyg/browser/served/' + file, content, 'utf-8');
                fs.writeFileSync(outputFolder + '/' + file, content, 'utf-8');
                // fs.rmSync(browserDistFolder+'/served/' + file+'.tmp');
            }
        }
    });
}
function removeBrowserCodeFromContent(serverCodeFunctionPrefix, content) {
    const regex = new RegExp(`${serverCodeFunctionPrefix}(.*?)\\(\\)(.+?){([^}]*)}`, 'g');
    const serverCodes = content.match(regex);
    for (const serverCode of serverCodes !== null && serverCodes !== void 0 ? serverCodes : []) {
        const emptyFn = serverCode.split(')')[0] + '){}';
        content = content.replace(serverCode, emptyFn);
    }
    return content;
}
function serveJsFromNoSsr(server, browserDistFolder) {
    server.get(/(.*?).js/i, (req, res) => {
        if (req.path.endsWith('.js.map')) {
            res.status(401).send('Unauthorized');
            return;
        }
        const content = fs.readFileSync(`${browserDistFolder}/../browserNoServerSideCode${req.path}`, 'utf8');
        res.type('js').send(content);
    });
}
//# sourceMappingURL=index.js.map