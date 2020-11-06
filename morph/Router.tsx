import { React } from './deps.ts';

import { RouterProps, PageProps } from './types.d.ts';

import ErrorPage from './ErrorPage.tsx';

const NotFoundPage: React.FC<PageProps> = ({ path }) => <ErrorPage path={path} code={404} />;

const Router: React.FC<RouterProps> = ({
  routes,
  initialPath,
  initialProps,
  renderContext = 'client',
}) => {
  const [path] = React.useState(initialPath);
  const [pageProps] = React.useState(initialProps);

  const Component = routes.find((route) => route.path === initialPath)?.component || NotFoundPage;

  return (
    <Component path={path} {...pageProps} />
  );
};

export default Router;
