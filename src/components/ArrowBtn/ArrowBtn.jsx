import React from "react";
import IconsSVG from "../icons";
import s from "./ArrowBtn.module.css";

import { useRouteMatch, Link } from "react-router-dom";

export default function ArrowBtn() {
  const { url } = useRouteMatch();
  const currentProjects = url.split("/")[2];

  return (
    <Link to={`/projects/${currentProjects}/sprints`} className={s.button}>
      <IconsSVG className={s.icon} name={"arrow"} />{" "}
      <p className={s.text}>Показати спринти</p>
    </Link>
    
  );
}
