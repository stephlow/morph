import { React } from './deps.ts';

import { ErrorPageProps } from './types.d.ts';

const ErrorPage: React.FC<ErrorPageProps> = ({ code }) => {
  return (
    <>
      <h1>Error: {code}</h1>
    </>
  );
};

export default ErrorPage;
