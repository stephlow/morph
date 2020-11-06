import { serve as baseServe, React, ReactDOMServer } from './deps.ts';

import Document from './Document.tsx';
import App from './App.tsx';

import { Application } from './types.d.ts';

export const serve = async ({ routes, port = 3000 }: Application) => {
  const server = baseServe({ port });
  console.log(`Server started at http://localhost:${port}`);

  for await (const req of server) {
    const path = req.url;

    try {
      let initialProps = {};
      const route = routes.find((route) => route.path === path);
      if (route) {
        if (typeof route.getServerSideProps === 'function') {
          initialProps = await route.getServerSideProps();
        }
      } else {
        initialProps = { code: 404 };
      }

      const body = (ReactDOMServer as any).renderToString(
        <Document>
          <App
            routes={routes}
            initialPath={path}
            initialProps={initialProps}
            renderContext="server"
          />
        </Document>
      );

      req.respond({ body: `<!DOCTYPE html />${body}` });
    } catch (e) {
      console.warn(e);
      req.respond({ body: `<!DOCTYPE html />Error!` });
    }
  }
};
