import React from "react";
import "./Button.scss";

const Button = ({ styles, children, disabled }) => {
  return (
    <button disabled={disabled ? true : false} className={`button`}>
      {children}
    </button>
  );
};

export default Button;
