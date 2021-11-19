import React from "react";
import IconsSVG from "../icons/icons";
import s from "./iconButton.module.css";
export default function iconButton({ name }) {
  return (
    <button className={s.button}>
      <IconsSVG className={s.icon} name={name} />
    </button>
  );
}
