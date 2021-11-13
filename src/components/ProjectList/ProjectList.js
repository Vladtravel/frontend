import { useState } from "react";
import Modal from "../Modal";
import IconButton from "../Modal/IconButton";
import { ReactComponent as Close } from "../Modal/IconButton/+.svg";
import { ReactComponent as AddProject } from "../Modal/IconButton/addProject.svg";
import FormCreateProject from "../Modal/FormCreateProject";
import s from "./ProjectList.module.css";

const ProjectList = () => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className={s.container}>
        <IconButton
          onClick={toggleModal}
          aria-label="create project"
          className="btnIconAddProject"
        >
          <AddProject />
        </IconButton>
      </div>

      <div className={s.containerWer}>sdfsdfsdfsdfsdfs</div>

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
