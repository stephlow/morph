import { React } from "../../morph/deps.ts";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <header>
        <a href="/">Frontpage</a>
        <a href="/about">About</a>
        <a href="/exception">Exception</a>
        <a href="/notfound">404</a>
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
