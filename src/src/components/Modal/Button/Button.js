import React from "react";
import PropTypes from "prop-types";
import s from "./Button.module.css";

const Button = ({ onClick, text, className, ...allProps }) => (
  <button className={s[className]} onClick={onClick} {...allProps}>
    {text}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};
export default Button;
