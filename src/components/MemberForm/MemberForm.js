import React, { useState } from "react";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";

import Modal from "../Modal/Modal";
import MemberList from "../MemberList/MemberList";
import s from "./MemberForm.module.css";

const MemberForm = ({ addMember }) => {
  const [email, setEmail] = useState("");

  return (
    <Modal>
      <div>
        <div className={s.modalContainer}>
          <h2 className={s.addFormTitle}>Додати людей</h2>
          <form>
            <input
              className={s.input}
              type="email"
              name="email"
              placeholder="Введіть e-mail"
              autoComplete="off"
              required
            />
          </form>

          <h4>Додані користувачі:</h4>
          <div className={s.buttonWrapper}>
            <button type="submit" className={s.btnReady}>
              Готово
            </button>
          </div>

          <div>
            <button type="submit">Відміна</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default MemberForm;
