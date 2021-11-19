import React from "react";
import IconsSVG from "../icons";
import s from "./ArrowBtn.module.css";
export default function ArrowBtn() {
  return (
    <button onClick={() => console.log(1)} className={s.button}>
      <IconsSVG className={s.icon} name={"arrow"} />{" "}
      <p className={s.text}>Показати спринти</p>
    </button>
  );
}
