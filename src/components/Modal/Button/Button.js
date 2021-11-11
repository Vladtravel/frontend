import React from "react";
import s from "./Button.module.css";

const Button = ({ onClick, text }) => (
  <button className={s.btn} type="button" onClick={onClick}>
    {text}
  </button>
);

export default Button;
