/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import "./layout.scss";
import Header from "../header/header";
import Footer from "../footer/footer";

const Layout = ({ children }: { children: JSX.Element[] }) => {
  return (
    <>
      <Header />
      <div className="layout">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
