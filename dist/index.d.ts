import express from 'express';
export declare function removeServerCode(serverCodeFunctionPrefix: string | undefined, browserDistFolder: string): Promise<void>;
export declare function removeBrowserCodeFromContent(serverCodeFunctionPrefix: string, content: string): string;
export declare function serveJsFromNoSsr(server: express.Express, browserDistFolder: string): void;
//# sourceMappingURL=index.d.ts.map