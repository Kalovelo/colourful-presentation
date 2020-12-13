import React from "react";
import "./button.scss";
import { ΙΒuttonProps } from "./interface";

const Button: React.FC<ΙΒuttonProps> = ({ link, action, children, extraClass }) => {
  return (
    <button onClick={() => action} className={`button--toggle learn-more`}>
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <a href={link} className="button-text">
        {children}
      </a>
    </button>
  );
};

export default Button;
