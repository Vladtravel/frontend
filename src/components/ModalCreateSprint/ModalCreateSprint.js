import { useState } from "react";
import Modal from "../Modal";
import IconButton from "../Modal/IconButton";
import DatePicker from "react-datepicker";

import { ReactComponent as Close } from "../Modal/IconButton/+.svg";
import "react-datepicker/dist/react-datepicker.css";
import s from "./ModalCreateSprint.module.css";

function ModalCreateSprint({ onClick }) {
  const Example = () => {
    const [startDate, setStartDate] = useState(new Date());
    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
    );
  };

  return (
    <Modal onClose={onClick}>
      <IconButton onClick={onClick} className="iconBtn" aria-label="close">
        <Close />
      </IconButton>

      <form className={s.modalAddSprint}>
        <h1 className={s.modalTitle}>Створення спринта</h1>
        <div className={s.formItem}>
          <input
            id="project-name"
            className={s.input}
            placeholder=" "
            type="text"
            name="name"
            title="Имя может состоять из букв, цифр, апострофа, тире и пробелов."
            pattern="^[a-zA-Zа-яА-Я-0-9]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // value={name}
            // onChange={handleInputChange}
            autoComplete="off"
            required
          />
          <label htmlFor="project-name" className={s.label}>
            Назва проекту
          </label>

          <input id="project-name" className={s} type="checkbox" name="name" />
          <label htmlFor="project-name" className={s}>
            Попередні дні
          </label>
        </div>
        <Example />
      </form>
    </Modal>
  );
}
export default ModalCreateSprint;
