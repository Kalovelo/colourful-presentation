import React from "react";
import "./hero.scss";
import ReactMarkdown from "react-markdown";
import { IHeroProps } from "./interface";

const Hero: React.FC<IHeroProps> = ({ headTitle, description, element }: any) => {
  return (
    <div className="hero">
      <div className="hero__text">
        <h1 className="hero__title">{headTitle}</h1>
        <p className="hero__subtitle">
          <ReactMarkdown source={description} />
        </p>
      </div>
      {element}
    </div>
  );
};

export default Hero;
