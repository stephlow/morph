import { Route, Application } from './morph/mod.ts';

import IndexPage from './src/IndexPage.tsx';
import AboutPage from './src/AboutPage.tsx';
import ExceptionPage from './src/ExceptionPage.tsx';

const frontpage: Route = {
  path: '/',
  component: IndexPage,
  getServerSideProps: async () => ({ message: 'Hello World' }),
};

const about: Route = {
  path: '/about',
  component: AboutPage,
};

const exception: Route = {
  path: '/exception',
  component: ExceptionPage,
};

const routes: Route[] = [
  frontpage,
  about,
  exception,
];

const app: Application = {
  routes,
  port: 3000,
};

export default app;
