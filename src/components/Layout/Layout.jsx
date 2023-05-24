import TopBar from "../TopBar";
import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      <main>{children}</main>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
