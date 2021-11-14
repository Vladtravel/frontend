import { useState } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import s from "./FormCreateProject.module.css";

function FormCreateProject({ toggleModal }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "name":
        setName(e.currentTarget.value);

        break;
      case "description":
        setDescription(e.currentTarget.value);
        break;
      default:
        return;
    }
  };
  const handleSubmitForm = (e) => {
    e.preventDefault();

    reset();
  };

  const reset = () => {
    setDescription("");
    setName("");
  };

  return (
    <>
      <h2 className={s.title}>Створення проекту</h2>

      <form className={s.form} onSubmit={handleSubmitForm}>
        <div className={s.formItem}>
          <input
            id="project-name"
            className={s.input}
            placeholder=" "
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={name}
            onChange={handleChange}
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
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            value={description}
            onChange={handleChange}
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
