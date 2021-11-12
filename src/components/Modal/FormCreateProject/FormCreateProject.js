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
  const handleSubmit = (e) => {
    e.preventDefault();

    setName("");
    setDescription("");
  };

  return (
    <>
      <h2 className={s.title}>Створення проекту</h2>

      <form onSubmit={handleSubmit}>
        <input
          className={s.input}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={name}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <label className={s.label}>Назва проекту</label>

        <input
          focus={true}
          className={s.input}
          type="text"
          name="description"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={description}
          onChange={handleChange}
          autoComplete="off"
          required
        />
        <label className={s.label}>Опис</label>

        <Button className="button" type="submit" text={"Увійти"} />
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
