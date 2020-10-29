import React from "react";
import Button from "../button/button";
import "./hero.scss";

interface heroProps {
  element: JSX.Element;
  cta: string;
  headTitle: string;
  description: string;
}

const Hero: React.FC<heroProps> = ({
  cta,
  headTitle,
  description,
  element,
}: any) => {
  return (
    <div className="hero">
      <div className="hero__text">
        <h1 className="hero__title">{headTitle}</h1>
        <p className="hero__subtitle">{description}</p>
        <Button link={cta}>Περισσότερα</Button>
      </div>
      {element}
    </div>
  );
};

export default Hero;
