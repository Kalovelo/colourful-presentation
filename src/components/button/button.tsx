import React from "react";
import "./button.scss";
import { ΙΒuttonProps } from "./interface";

const Button: React.FC<ΙΒuttonProps> = ({ disabled, buttonRef, text, action }) => {
  return (
    <button
      disabled={disabled}
      ref={buttonRef}
      type="submit"
      onClick={() => action}
      className={`button button--toggle learn-more`}
    >
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">{text}</span>
    </button>
  );
};

export default Button;
