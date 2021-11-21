import { useState } from "react";
import IconButton from "../../components/Modal/IconButton";
import { ReactComponent as IconAddProject } from "../../components/Modal/IconButton/addProject.svg";
import { ReactComponent as Close } from "../../components/Modal/IconButton/+.svg";
import FormCreateProject from "../../components/TasksForm";
import Modal from "../../components/Modal";
import s from "../ProjectList/ProjectButtonAdd/ProjectButtonAdd.module.css";
import "react-toastify/dist/ReactToastify.css";

const TaskButtonAdd = ({ text, description, className }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <div className={s[className]}>
        <h2 className={s.title}>{text}</h2>

        <IconButton
          onClick={toggleModal}
          aria-label="create project"
          className={"btnIconAddProject"}
        >
          <IconAddProject />
        </IconButton>
        <p className={s.text}>{description}</p>
      </div>

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

export default TaskButtonAdd;
