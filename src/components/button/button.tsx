import React from "react";
import "./button.scss";

const Button = () => {
  return (
    <button className="button learn-more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">Μάθε Περισσότερα</span>
    </button>
  );
};

export default Button;
