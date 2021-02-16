import React from "react";
import "./hero.scss";
import ReactMarkdown from "react-markdown";
import { IHeroProps } from "./interface";

const Hero: React.FC<IHeroProps> = ({ headTitle, description, element }: any) => {
  return (
    <div className="hero">
      <div className="hero__text">
        <h1 className="hero__title">{headTitle}</h1>
        <span className="hero__subtitle">
          <ReactMarkdown source={description} />
        </span>
      </div>
      <div className="hero__element">{element}</div>
    </div>
  );
};

export default Hero;
