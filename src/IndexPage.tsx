import { React } from "../morph/deps.ts";
import { PageProps } from "../morph/types.d.ts";

import Layout from "./components/Layout.tsx";

const IndexPage: React.FC<PageProps & { message: string }> = ({ message }) => {
  return (
    <Layout>
      {message}
    </Layout>
  );
};

export default IndexPage;
