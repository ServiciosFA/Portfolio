import React from "react";
import "./Input.scss";

const Input = ({
  type,
  id,
  label,
  name,
  onBlur,
  onChange,
  hasError,
  message,
  placeholder,
}) => {
  const input = hasError ? "input error" : "input";

  return (
    <div className="inputLayout">
      <input
        className={input}
        id={id}
        type={type}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        placeholder={placeholder}
        required
      ></input>
      {hasError && <label className="labelError">{message}</label>}
    </div>
  );
};

export default Input;
