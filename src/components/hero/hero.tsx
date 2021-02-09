import React from "react";
import createMarkup from "../../utils/markup";
import Button from "../button/button";
import "./hero.scss";
import { IHeroProps } from "./interface";

const Hero: React.FC<IHeroProps> = ({ headTitle, description, element }: any) => {
  return (
    <div className="hero">
      <div className="hero__text">
        <h1 className="hero__title">{headTitle}</h1>
        <p
          dangerouslySetInnerHTML={createMarkup(description)}
          className="hero__subtitle"
        />
      </div>
      {element}
    </div>
  );
};

export default Hero;
