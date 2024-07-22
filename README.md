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

# Even Cleaner Method by bundle parsing ( planed vor V2 )

```

function RemoveOnServe(): MethodDecorator {
  return (target, propertyKey, descriptor) => {
    Reflect.defineMetadata("remove-on-serve", true, target, propertyKey);

  }
}

import * as fs from 'fs';
import * as acorn from 'acorn';

const inputFolder = '../dist/playground/browser';
const files = fs.readdirSync(inputFolder).filter(f => f.endsWith('.js') && !f.includes('polyfills'));

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

let decoratorDefinition: acorn.FunctionDeclaration | undefined;
for (const file of files) {
  const fileData = fs.readFileSync(`${inputFolder}/${file}`, 'utf-8');
  const program = acorn.parse(fileData, {ecmaVersion: 2022});
  decoratorDefinition = findRemoveOnServeDecoratorDefinition(program, fileData)
  if (decoratorDefinition) {
    // console.log(decoratorDefinition);
    console.log('Breaking');
    break;
  }
}
const decoratedFns: string[] = [];
const doneMethods: string[] = [];
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
function removeSsrFnBody(file: string, output: string) {
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
          removeSsrFnBody(output, output);
          break;
        }
        // fs.writeFileSync('./exp.json', JSON.stringify(ssrMethods, null, 2), 'utf-8')
      }
    }
  }
}
for (const file of files) {
  removeSsrFnBody(`${inputFolder}/${file}`, `${inputFolder}/${file.replace('.js','.fixed.js')}`);
}


```
