import React from "react";
import IconsSVG from "./sprite.svg";

function Icons({ name, className }) {
  return (
    <svg className={`icon icon-${name} ${className}`}>
      <use xlinkHref={`${IconsSVG}#${name}`} />
    </svg>
  );
}

export default Icons;
