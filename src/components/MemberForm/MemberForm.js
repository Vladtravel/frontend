import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";

import operations from "../../redux/members/members-operations";
import Button from "../Modal/Button/Button";
import MemberList from "../MemberList/MemberList";
import btnClose from "./btnClose.svg";
import { getEmails } from "../../redux/selectors";
import s from "./MemberForm.module.css";

const MemberForm = ({ toggleModal }) => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const location = useLocation();

  const { url } = useRouteMatch();
  console.log(url);

  const dispatch = useDispatch();

  const inputEmailValue = (e) => {
    const { email, value } = e.currentTarget;

    setEmail(value);
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

  // const addPeople = (e) => {
  //   e.preventDefault();
  //   const newEmail = emails.some((email) => email.name === email);
  //   if (newEmail) {
  //     alert(`Цей користувач ${email} вже є учасником`);
  //     formReset();
  //     return;
  //   }
  //   onFormSubmit();
  //   formReset();
  //   toggleModal();
  // };

  // const projectId = useSelector((state) => state.projects.items.map((project) => project.name.item._id))

  // const onFormSubmit = async ({ _id, email }) => {

  //   // const projectId = location.pathname.split("/")[2];

  //   const value = { _id, email };

  //   const result = await validateEmail(email);

  //   if(!result) {
  //     alert('Почта не вірна')
  //   }

  //   return dispatch(operations.addMemberOperation({ _id, email }));

  // };

  const formReset = () => {
    setEmail("");
  };
  // 1
  const onSubmitEmail = ({ email }) => {
    return dispatch(operations.addMemberOperation({ email }));
  };
  console.log(onSubmitEmail({ email }));
  // =======
  //   const formReset = () => {
  //     setEmail("");
  //   };
  // // 1
  //   const onSubmitEmail = async ({email}) => {
  //     console.log(email)
  //     const currentProjectId = url.split("/")[2];
  //     console.log(currentProjectId)
  //     const value = { email, currentProjectId}
  //     console.log(value)
  //     // const result = await validateEmail({email})
  //       return dispatch(operations.addMemberOperation(value))

  //   }
  // >>>>>>> 2e483104d9b6a564699a8e70238cf81c7bfdac93

  const id = url.split("/")[2];

  // 1

  // 2
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmitEmail({ email });
    formReset();
    toggleModal();
  };

  return (
    <>
      <div>
        <img
          onClick={toggleModal}
          className={s.buttonClose}
          src={btnClose}
          alt="modal close icon"
        />

        <div className={s.modalContainer}>
          <h2 className={s.addFormTitle}>Додати людей</h2>
          <form
            onSubmit={(e) => {
              handleSubmit(e);
            }}
          >
            <input
              id="members-email"
              className={s.input}
              onChange={inputEmailValue}
              type="text"
              name="email"
              value={email}
              placeholder="Введіть e-mail"
              autoComplete="on"
              required
            />
            {/* <button type="submit">Gotovo</button> */}
          </form>
          <div className={s.buttonWrapper}>
            <Button className="button" type="submit" text={"Готово"} />
            <Button
              type="button"
              className="btnLink"
              text={"Відміна"}
              onClick={toggleModal}
            />

            <div className={s.modalContainer}>
              <h2 className={s.addFormTitle}>Додати людей</h2>
              <form onSubmit={handleSubmit}>
                <input
                  id="members-email"
                  className={s.input}
                  onChange={inputEmailValue}
                  type="text"
                  name="email"
                  value={email}
                  placeholder="Введіть e-mail"
                  autoComplete="on"
                  required
                />

                <h4 className={s.usersTitle}>Додані користувачі:</h4>
                <MemberList />

                <div className={s.buttonWrapper}>
                  <Button className="button" type="submit" text={"Готово"} />
                  <Button
                    type="button"
                    className="btnLink"
                    text={"Відміна"}
                    onClick={toggleModal}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MemberForm;
