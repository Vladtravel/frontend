import ProjectItem from "../ProjectItem";
import ProjectButtonAdd from "./ProjectButtonAdd/ProjectButtonAdd";

import Add from "../MemberForm/MemberForm"

const ProjectList = () => {
  return (
    <>
      <ProjectButtonAdd text={"Проекти"} description={" Створити проект"} />

      <ProjectItem />
    </>
  );
};

export default ProjectList;
