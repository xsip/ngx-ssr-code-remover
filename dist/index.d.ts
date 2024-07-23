import express from 'express';
export * as removeSsrCodeV2 from './v2';
export * as removeSsrCodeV3 from './v3';
export declare function removeServerCode(serverCodeFunctionPrefix: string | undefined, browserDistFolder: string): Promise<void>;
export declare function removeBrowserCodeFromContent(serverCodeFunctionPrefix: string, content: string): string;
export declare function serveJsFromNoSsr(server: express.Express, browserDistFolder: string): void;
//# sourceMappingURL=index.d.ts.map