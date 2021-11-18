import ProjectItem from "../ProjectItem";
import ProjectButtonAdd from "./ProjectButtonAdd/ProjectButtonAdd";

import Add from "../MemberForm/MemberForm"

const ProjectList = () => {
  return (
    <>
      <ProjectButtonAdd
        text={"Проекти"}
        description={" Створити проект"}
        className={"btnIconAddProject"}
      />

      <ProjectItem />
    </>
  );
};

export default ProjectList;
