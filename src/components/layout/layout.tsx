/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { OnlineContextProvider } from "../context/NetworkContext";
import CookieNotice from "../cookie_notice/cookieNotice";
import Footer from "../footer/footer";
import Header from "../header/header";
import { ILayoutProps } from "./interface";
import "./layout.scss";

const Layout: React.FC<ILayoutProps> = ({ children, className }) => {
  return (
    <OnlineContextProvider>
      <Header />
      <CookieNotice />
      <div className="layout slide-in-bottom">
        <main className={className}>{children}</main>
      </div>
      <Footer />
    </OnlineContextProvider>
  );
};

export default Layout;
