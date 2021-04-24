import React, { forwardRef, LegacyRef } from "react";
import "./button.scss";
import { ΙΒuttonProps } from "./interface";

const Button = (
  { action, text, disabled }: ΙΒuttonProps,
  ref: LegacyRef<HTMLButtonElement>
) => {
  return (
    <button
      disabled={disabled}
      ref={ref}
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

export default forwardRef(Button);
