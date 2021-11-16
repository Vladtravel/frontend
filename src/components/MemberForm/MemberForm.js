import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";

import operations from "../../redux/operations";
import Modal from "../Modal/Modal";
import MemberList from "../MemberList/MemberList";
import btnClose from "./btnClose.svg";
import { getEmails } from "../../redux/selectors";
import s from "./MemberForm.module.css";

const MemberForm = ({ emails }) => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(true);
  const location = useLocation();

  const dispatch = useDispatch();

  const inputEmailValue = (e) => {
    const { email } = e.target.value;
    setEmail(email);
  };

  const validateEmail = (email) => {
    const errorsObject = {};

    if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      errorsObject.title = "Введіть існуючий email";
    }
    if (email.length === 0) {
      errorsObject.title = "Обов'язкове поле";
    }
    setErrors(errorsObject);

    return !!Object.keys(errorsObject).length;
  };

  const addPeople = (e) => {
    e.preventDefault();
    const newEmail = emails.some((email) => email.name === email);
    if (newEmail) {
      alert(`Цей користувач ${email} вже є учасником`);
      formReset();
      return;
    }
    onFormSubmit();
    formReset();
  };

  const onFormSubmit = async (e) => {
    e.preventDefault();

    const projectId = location.pathname.split("/")[2];
    const value = { projectId, email };

    const result = await validateEmail(email);

    if(!result) {
      alert('Почта не вірна')
    }
    // дописать аргументы
    dispatch(operations.addMemberOperation({ email })); 

console.log(value)
  };

  const formReset = () => {
    setEmail("");
  };

  const toggleModal = (e) => {
    setShowModal(!showModal);
  };

  return (
    <>
      {showModal && (
        <Modal onClose={toggleModal}>
          <div>
            <img
              onClick={toggleModal}
              className={s.buttonClose}
              src={btnClose}
              alt="modal close icon"
            />
            <div className={s.modalContainer}>
              <h2 className={s.addFormTitle}>Додати людей</h2>
              <form onSubmit={addPeople}>
                <input
                  className={s.input}
                  onChange={inputEmailValue}
                  type="text"
                  name="email"
                  placeholder="Введіть e-mail"
                  autoComplete="off"
                  required
                />
              </form>

              <h4 className={s.usersTitle}>Додані користувачі:</h4>

              <div className={s.buttonWrapper}>
                <button type="submit" className={s.btnReady}>
                  Готово
                </button>
                <button
                  onClick={toggleModal}
                  type="submit"
                  className={s.btnCncld}
                >
                  Відміна
                </button>
              </div>
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};



export default MemberForm;
