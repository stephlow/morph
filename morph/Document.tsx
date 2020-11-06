import { React, ReactDOMServer } from './deps.ts';

import { RouterProps } from './types.d.ts';

import Router from './Router.tsx';

export const renderDocument = (props: RouterProps) => {
  let body;
  try {
    body = (ReactDOMServer as any).renderToString(
      <Document>
        <Router {...props} />
      </Document>
    );
  } catch(e) {
    body = 'Error';
  }

  return `<!DOCTYPE html>${body}`;
};

const Document: React.FC = ({ children }) => {
  return (
    <>
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>Morph App</title>
        </head>
        <body >
          <div id="__morph">{children}</div>
        </body>
      </html>
    </>
  );
};

export default Document;
