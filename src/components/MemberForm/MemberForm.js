import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouteMatch } from "react-router-dom";
import { addPeople } from "../../redux/projects/projects-operations";
import Button from "../Modal/Button/Button";
import btnClose from "./btnClose.svg";
import s from "./MemberForm.module.css";
import { getAllProjects } from "../../redux/projects/projects-selectors";
import operations from "../../redux/operations";
import selectors from "../../redux/selectors";

const MemberForm = ({ toggleModal }) => {
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState("valid");
  const [isRegisteredUser, setIsRegisteredUser] = useState("valid");

  const dispatch = useDispatch();

  const { url } = useRouteMatch();

  const currentProjectId = url.split("/")[2];

  const handleInputChange = (event) => setEmail(event.currentTarget.value);

  const projects = useSelector(getAllProjects);

  const users = useSelector(selectors.getUsers);

  const currentUser = useSelector(selectors.getUserEmail);

  const userFind = users.find((user) => user === email);

  // Вытягиваем масив owners текущего проекта
  const owners = projects.find(({ _id }) => _id === currentProjectId).owners;

  // Фильтруем массив owners, оставляем толко команду (удаляем текущего ползователя)
  const team = owners.filter((owner) => owner.email !== currentUser);

  const alreadyExist = team.find((el) => el.email === email);

  const reset = () => {
    setEmail("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(operations.getUsers(currentProjectId));

    if (!userFind) {
      setIsRegisteredUser("notValid");
      return;
    }

    if (!email) {
      setValidEmail("noEmail");

      return;
    } else if (alreadyExist) {
      setValidEmail("alreadyExist");
      return;
    } else {
      setValidEmail("valid");
    }
    dispatch(addPeople(currentProjectId, { email }));
    reset();
    toggleModal();
  };

  return (
    <>
      <div>
        <img onClick={toggleModal} className={s.buttonClose} src={btnClose} alt="modal close icon" />

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
              onChange={handleInputChange}
              type="text"
              name="email"
              value={email}
              placeholder="Введіть e-mail"
              autoComplete="on"
              required
            />
            {validEmail === "alreadyExist" && <p>*Такого користувача вже додано до проекту</p>}
            {isRegisteredUser === "notValid" && <p>*Такий користувач не зареєстрований</p>}
            <span className={s.membersTitleList}>
              Додані користувачі:
              {team.length === 0 ? (
                <p className={s.membersItem}>Ви ще не додали жодного користувача</p>
              ) : (
                <ul className={s.membersList}>
                  {owners.map(({ email }) => (
                    <li key={email} className={s.membersItem}>
                      <p>{email}</p>
                    </li>
                  ))}
                </ul>
              )}
            </span>

            <div className={s.buttonWrapper}>
              <Button className="button" type="submit" text={"Готово"} />
              <Button type="button" className="btnLink" text={"Відміна"} onClick={toggleModal} />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default MemberForm;
