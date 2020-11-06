import { React } from './deps.ts';

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
