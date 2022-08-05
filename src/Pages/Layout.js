import Header from "../container/header";

const Layout = ({ children, handleToken }) => {
  return (
    <>
      <Header handleToken={handleToken} />
      {children}
    </>
  );
};
export default Layout;
