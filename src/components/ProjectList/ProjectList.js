import ProjectItem from "../ProjectItem";
import ProjectButtonAdd from "./ProjectButtonAdd/ProjectButtonAdd";

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
