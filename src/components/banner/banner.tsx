import React from "react";
import "./banner.scss";
import { ΙΒannerProps } from "./interface";

const Banner: React.FC<ΙΒannerProps> = ({ type, icon, title, text }) => {
  return (
    <>
      <div className={`banner banner--${type} banner--${title}`}>
        <div className="banner__icon">{icon}</div>
        <h2 className="banner__title">{title}</h2>
        <p className="banner__subtitle">{text}</p>
      </div>
    </>
  );
};

export default Banner;
