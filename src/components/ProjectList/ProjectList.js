import { useState } from "react";
import Modal from "../Modal";
import IconButton from "../Modal/IconButton";
import { ReactComponent as Close } from "../Modal/IconButton/+.svg";
import { ReactComponent as IconAddProject } from "../Modal/IconButton/addProject.svg";
import FormCreateProject from "../Modal/FormCreateProject";
import ProjectItem from "../ProjectItem";
import s from "./ProjectList.module.css";

import projects from "../ProjectItem/project.json";

const ProjectList = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className={s.container}>
        <h2 className={s.title}>Проекти</h2>

        <IconButton
          onClick={toggleModal}
          aria-label="create project"
          className="btnIconAddProject"
        >
          <IconAddProject />
        </IconButton>
        <p className={s.text}>Створити проект</p>
      </div>

      <ProjectItem projects={projects} />

      {showModal && (
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
      )}
    </>
  );
};

export default ProjectList;
