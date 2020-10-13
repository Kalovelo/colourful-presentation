import React from "react";
import "./button.scss";

interface buttonProps {
  link?: string;
  action?: Function;
  children: any;
  extraClass?: string;
}
const Button: React.FC<buttonProps> = ({ link, action, children, extraClass }) => {
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
