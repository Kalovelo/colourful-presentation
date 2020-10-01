import React from "react";
import "./banner.scss";
interface bannerProps {
  type: string;
  icon: JSX.Element;
  title: string;
  text: string;
}

const Banner: React.FC<bannerProps> = ({ type, icon, title, text }) => {
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
