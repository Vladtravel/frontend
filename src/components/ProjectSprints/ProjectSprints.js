import React from "react";
import s from "./ProjectSprints.module.css";
import RenameSprint from "../Sprint/RenameSprint";

import Sidebar from "../Sidebar";

function ProjectSprints() {

  return (
    <div className={s.Sprints}>
      <Sidebar />
      <div className={s.projectDetails}>
        {/* <arrowButton /> */}
        <RenameSprint />
        {/* <arrowButton /> */}
      </div>
    </div>
  );
}
export default ProjectSprints;
