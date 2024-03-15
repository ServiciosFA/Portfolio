import React from "react";
import "./Button.scss";

const Button = ({ styles, children, disabled }) => {
  return (
    <button className={"buttonGlobal"} disabled={disabled ? true : false}>
      {children}
    </button>
  );
};

export default Button;
