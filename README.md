# ngx-ssr-remover

**ngx-ssr-remover** will post-process your angular bundle in your express server and serve bundles with ssr code removed
![alt text](https://github.com/xsip/ngx-ssr-code-remover/blob/main/preview.png?raw=true)
# Setup
**npm i git@github.com:xsip/ngx-ssr-code-remover.git**

Change your angular production build configuration to the following:
```javascript
"production": {  
  "budgets": [  
	  ...
  ],  
  "outputHashing": "all",  
  "optimization": false,  
  "sourceMap": false  
},
```

 Your express server should contain like the following.

```javascript
...
const server = express();  
const serverDistFolder = dirname(fileURLToPath(import.meta.url));  
const browserDistFolder = resolve(serverDistFolder, '../browser');  
const indexHtml = join(serverDistFolder, 'index.server.html');  
  
const commonEngine = new CommonEngine();  
  
server.set('view engine', 'html');  
server.set('views', browserDistFolder);  
  
await removeServerCode('serverCode', browserDistFolder);  // add this line of code for post processing
serveJsFromNoSsr(server, browserDistFolder);  // add this to serve processed JS files
  
  
server.get('**', express.static(browserDistFolder, {  
  maxAge: '1y',  
  index: 'index.html',  
}));
...
```
**serverCode** is the prefix. So if you use **serverCode** as your prefix all ssr function names need to start with **serverCode**.
