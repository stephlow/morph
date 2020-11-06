export type Path = string;

export type Route = {
  path: Path;
  component: any;
  getServerSideProps?: any;
};

export type Application = {
  routes: Route[];
  port?: number;
};

export type RouterProps = {
  routes: Route[];
  initialPath: Path;
  initialProps?: any;
  renderContext: string;
};

export type PageProps = {
  path: Path;
};

export type ErrorPageProps = PageProps & {
  code: number;
};
