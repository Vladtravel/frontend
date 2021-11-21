import { useState } from "react";
import Modal from "../Modal";
import IconButton from "../Modal/IconButton";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Button from "../Modal/Button/Button";
import btnClose from "./btnClose.svg";
import s from "./ModalCreateSprint.module.css";
function ModalCreateSprint({
  onSubmit,
  value,
  setName,
  data,
  setIsModalOpen,
  endDate,
  setEndDate,
}) {
  const Example = () => {
   return (
      <DatePicker selected={endDate} onChange={(date) => setEndDate(date)} />

    );
  };

  return (
    <div className={s.backdrop}>
    
    <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit(data);
          setIsModalOpen(false);
        }}
        className={s.modalAddSprint}
      >
           <img
               onClick={(e) => {
                e.preventDefault();
                setIsModalOpen(false)
              }}
              className={s.buttonClose}
              src={btnClose}
              alt="modal close icon"
            />
       <h2 className={s.modalTitle}>Створення спринта</h2>
       
        <div className={s.formItem}>
          <input
            value={value}
            onChange={(e) => setName(e.currentTarget.value)}
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
            Назва спринта
          </label>
        </div>
        <Example />
        {/* <button type="submit">submit</button> */}

        <Button className="button" type="submit" text={"Готово"} />
              <Button
                type="button"
                className="btnLink"
                text={"Відміна"}
                onClick={(e) => {
                  e.preventDefault();
                  setIsModalOpen(false)
                }}
              
               />
      </form>
    </div>

  );
}
export default ModalCreateSprint;
