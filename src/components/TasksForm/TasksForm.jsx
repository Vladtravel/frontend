import { useState } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
// import { toast } from "react-toastify";
import Button from "../Modal/Button";
import { addTask } from "../../redux/tasks/operation";
// import { getError } from "../../redux/tasks/selectors";
import { useRouteMatch } from "react-router-dom";

import s from "./TasksForm.module.css";

function TasksForm({ toggleModal }) {
  const [name, setName] = useState("");
  const [hours, setHours] = useState("");
  const { url } = useRouteMatch();
  const currentProjects = url.split("/")[2];
  const currentSprint = url.split("/")[4];

  // const error = useSelector(getError);

  // console.log(hours);
  const dispatch = useDispatch();

  const onSubmit = ({ name, hours, currentSprint, currentProjects }) => {
    return dispatch(addTask({ name, hours, currentSprint, currentProjects }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);

        break;
      case "hours":
        setHours(Number(value));
        break;
      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = { name, hours, currentSprint, currentProjects };
    onSubmit(data);

    reset();
    toggleModal();
  };

  const reset = () => {
    setHours(0);
    setName("");
  };

  return (
    <>
      <div className={s.modalContainer}>
        <h2 className={s.title}>Создание задачи</h2>

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
              Название задачи
            </label>
          </div>

          <div className={s.formItem}>
            <input
              id="project-phone"
              className={s.inputHour}
              placeholder=" "
              type="number"
              name="hours"
              pattern="^[0-9]*$"
              value={hours}
              onChange={handleInputChange}
              title="Имя может состоять из цифр."
              autoComplete="off"
              required
            />
            <label htmlFor="project-phone" className={s.label}>
              Заплановано годин
            </label>
          </div>
          <Button className="button" type="submit" text={"Готово"} />

          <Button
            type="button"
            className="btnLink"
            text={"Відміна"}
            onClick={toggleModal}
          />
        </form>
      </div>
    </>
  );
}

TasksForm.propTypes = {
  toggleModal: PropTypes.func,
};

export default TasksForm;
