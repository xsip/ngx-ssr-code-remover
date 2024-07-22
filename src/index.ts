import * as fs from 'fs';
import express from 'express';

const [, , _inputFolder] = process.argv;
export * as removeSsrCodeV2 from './v2';

export async function removeServerCode(serverCodeFunctionPrefix = 'serverCode', browserDistFolder: string) {
    const outputFolder: string = browserDistFolder + '/../browserNoServerSideCode'
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


}

export function removeBrowserCodeFromContent(serverCodeFunctionPrefix: string, content: string) {
    const regex = new RegExp(`${serverCodeFunctionPrefix}(.*?)\\(\\)(.+?){([^}]*)}`, 'g');
    const serverCodes = content.match(regex) as String[];
    for (const serverCode of serverCodes ?? []) {
        const emptyFn = serverCode.split(')')[0] + '){}';
        content = content.replace(serverCode as string, emptyFn);
    }

    return content;
}

export function serveJsFromNoSsr(server: express.Express, browserDistFolder: string) {
    server.get(/(.*?).js/i, (req: express.Request, res: express.Response) => {
        if (req.path.endsWith('.js.map')) {
            res.status(401).send('Unauthorized');
            return;
        }
        const content = fs.readFileSync(`${browserDistFolder}/../browserNoServerSideCode${req.path}`, 'utf8');
        res.type('js').send(content);
    })
}
