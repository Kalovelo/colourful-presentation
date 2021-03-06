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
import { ILayoutProps } from "./interface";
import CookieNotice from "../cookie_notice/cookieNotice";

const Layout: React.FC<ILayoutProps> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <>
      <Header />
      <CookieNotice />
      <div className="layout slide-in-bottom">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
