import { useState } from "react";
import Modal from "../Modal";
import IconButton from "../Modal/IconButton";
import { ReactComponent as Close } from "../Modal/IconButton/+.svg";
import { ReactComponent as IconAddProject } from "../Modal/IconButton/addProject.svg";
import FormCreateProject from "../Modal/FormCreateProject";
import ProjectItem from "../ProjectItem";
import projects from "../ProjectItem/project.json";
import ProjectButtonAdd from "./ProjectButtonAdd/ProjectButtonAdd";

const ProjectList = () => {
  // const [showModal, setShowModal] = useState(false);

  // const toggleModal = () => {
  //   setShowModal(!showModal);
  // };

  return (
    <>
      <ProjectButtonAdd text={"Проекти"} description={" Створити проект"} />

      <ProjectItem projects={projects} />

      {/* {showModal && (
        <Modal onClose={toggleModal}>
          <IconButton
            onClick={toggleModal}
            className="iconBtn"
            aria-label="close"
          >
            <Close />
          </IconButton>
          <FormCreateProject toggleModal={toggleModal} />
        </Modal>
      )} */}
    </>
  );
};

export default ProjectList;
