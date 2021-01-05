import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Background from "./background";
import BarHeader from "./barHeader";
import "./header.scss";
import ModalHeader from "./modalHeader";

const Header: React.FC = () => {
  const data: any = useStaticQuery(graphql`
    query {
      api {
        types {
          title: plural_name
          slug
          topics {
            slug
            title
          }
        }
      }
    }
  `);

  return (
    <header className="header">
      <div className="header__wrapper">
        <BarHeader data={data} />
        <ModalHeader data={data} />
      </div>
      <span className="header__background">
        <Background />
      </span>
    </header>
  );
};

export default Header;
