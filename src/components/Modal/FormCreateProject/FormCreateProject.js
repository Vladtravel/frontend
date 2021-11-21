import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import Button from "../Button";
import { addProject } from "../../../redux/projects/projects-operations";
import { getError } from "../../../redux/projects/projects-selectors";

import s from "./FormCreateProject.module.css";

function FormCreateProject({ toggleModal }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const nameItems = useSelector((state) =>
    state.projects.items.map((project) => project.name)
  );

  const error = useSelector(getError);

  const dispatch = useDispatch();

  const onSubmit = ({ name, description }) => {
    return dispatch(addProject({ name, description }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);

        break;
      case "description":
        setDescription(value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (nameItems.join("").toLowerCase().includes(name.toLowerCase())) {
      toast.error(`Проєкт з ім'ям "${name}" уже є!`);

      reset();
      return;
    }

    if (error) {
      return;
    }

    onSubmit({ name, description });

    reset();
    toggleModal();
  };

  const reset = () => {
    setDescription("");
    setName("");
  };

  return (
    <>
      <h2 className={s.title}>Створення проекту</h2>

      <form className={s.form} onSubmit={handleSubmit}>
        <div className={s.formItem}>
          <input
            id="project-name"
            className={s.input}
            placeholder=" "
            type="text"
            name="name"
            title="Имя может состоять из букв, цифр, апострофа, тире и пробелов."
            pattern="^[a-zA-Zа-яА-Я-0-9]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={name}
            onChange={handleInputChange}
            autoComplete="off"
            required
          />
          <label htmlFor="project-name" className={s.label}>
            Назва проекту
          </label>
        </div>

        <div className={s.formItem}>
          <input
            id="project-phone"
            className={s.input}
            placeholder=" "
            type="text"
            name="description"
            pattern="^[a-zA-Zа-яА-Я-0-9]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={description}
            onChange={handleInputChange}
            title="Имя может состоять из букв, цифр, апострофа, тире и пробелов."
            autoComplete="off"
            required
          />
          <label htmlFor="project-phone" className={s.label}>
            Опис
          </label>
        </div>

        <Button className="button" type="submit" text={"Готово"} />
      </form>

      <Button
        type="button"
        className="btnLink"
        text={"Відміна"}
        onClick={toggleModal}
      />
    </>
  );
}

FormCreateProject.propTypes = {
  toggleModal: PropTypes.func,
};

export default FormCreateProject;
