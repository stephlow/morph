import { serve as baseServe } from './deps.ts';

import Document, { renderDocument } from './Document.tsx';

import { Application, RouterProps } from './types.d.ts';

export const serve = async ({ routes, port = 3000 }: Application) => {
  const server = baseServe({ port });
  console.log(`Server started at http://localhost:${port}`);

  for await (const req of server) {
    const path = req.url;

    let initialProps = {};
    const route = routes.find((route) => route.path === path);
    if (route) {
      if (typeof route.getServerSideProps === 'function') {
        initialProps = await route.getServerSideProps();
      }
    } else {
      initialProps = { code: 404 };
    }

    const body = renderDocument({
      routes: routes,
      initialPath: path,
      initialProps: initialProps,
      renderContext: 'server',
    });

    req.respond({ body });
  }
};
