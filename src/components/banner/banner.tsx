import React from "react";
import "./banner.scss";
interface bannerProps {
  icon: any;
  text: string;
}

const Banner: React.FC<bannerProps> = ({ icon, text }) => {
  return (
    <div className="banner">
      <div className="banner__icon">{icon}</div>
      <h2 className="banner__title">{text}</h2>
      <p className="banner__subtitle">
        Introducing a technology in a hands-on session. Showcase your Laptop
        Stickers!
      </p>
    </div>
  );
};

export default Banner;
