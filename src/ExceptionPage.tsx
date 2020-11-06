import { React } from '../morph/deps.ts';
import Layout from './components/Layout.tsx';

const ExceptionPage: React.FC = () => {
  throw new Error();

  return (
    <Layout>
      Nothing to see here, moving along...
    </Layout>
  );
};

export default ExceptionPage;
