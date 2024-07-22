# ngx-ssr-remover

**ngx-ssr-remover** will post-process your angular bundle in your express server and serve bundles with ssr code removed
![alt text](https://github.com/xsip/ngx-ssr-code-remover/blob/main/preview.png?raw=true)
# Setup
``` npm i git@github.com:xsip/ngx-ssr-code-remover.git```


 Your express server should contain the following to lines.

```javascript
...
import {removeSsrCodeV2} from "ngx-ssr-remover";


  server.set('view engine', 'html');
  server.set('views', browserDistFolder);

  // add those two lines to your express server
  removeSsrCodeV2.removeServerCode(browserDistFolder);
  removeSsrCodeV2.serveJsFromNoSsr(server,browserDistFolder);


  server.get('**', express.static(browserDistFolder, {
    maxAge: '1y',
    index: 'index.html',
  }));

...
```

To Automatically remove functions using the post-processor, decorate your component functions:

```typescript
...
import {RemoveOnServe} from "ngx-ssr-remover/dist/decorator";


  @RemoveOnServe()
  test() {
    console.log('HI');
  }



```

Feel free to write tickets when you encounter some issue.
