import React from "react";
import PropTypes from "prop-types";
import s from "./Button.module.css";

const Button = ({ onClick, text, className }) => (
  <button className={s[className]} type="button" onClick={onClick}>
    {text}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};
export default Button;
