import { React } from './deps.ts';

import { AppProps, PageProps } from './types.d.ts';

import ErrorPage from './ErrorPage.tsx';

const NotFoundPage: React.FC<PageProps> = ({ path }) => <ErrorPage path={path} code={404} />;

const App: React.FC<AppProps> = ({
  routes,
  initialPath,
  initialProps,
  renderContext = 'client',
}) => {
  const [path] = React.useState(initialPath);
  const [pageProps] = React.useState(initialProps);

  const Component = routes.find((route) => route.path === initialPath)?.component || NotFoundPage;

  return (
      <Component path={path} {...initialProps} />
  );
};

export default App;
