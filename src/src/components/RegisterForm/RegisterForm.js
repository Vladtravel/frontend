import { NavLink, useHistory } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import operations from "../../redux/operations";
import s from "./RegisterForm.module.css";
import BackgroundAuth from "../BackgroundAuth/BackgroundAuth";

function RegisterForm() {
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRepeat, setPasswordRepeat] = useState("");

  const dispatch = useDispatch();

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "email":
        setEmail(e.currentTarget.value);
        break;
      case "password":
        setPassword(e.currentTarget.value);
        break;
      case "passwordRepeat":
        setPasswordRepeat(e.currentTarget.value);
        break;
      default:
        return;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      email.trim() === "" ||
      password.trim() === "" ||
      passwordRepeat.trim() === ""
    ) {
      alert("Fill all fields!");
      return;
    }
    dispatch(operations.register({ email, password }));

    setEmail("");
    setPassword("");
    setPasswordRepeat("");
    history.push("/confirmation");
  };

  return (
    <>
      <BackgroundAuth />
      <div className={s.forma}>
          <form onSubmit={handleSubmit}>
          <h1 className={s.formaTitle}>Реєстрація</h1>
            <div className={s.formaEmail}>
               <input
                  className={s.formaInput}
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="E-mail"
                  // autocomplete="off"
                />
                <label className={s.formaLabel}>E-mail</label>
            </div>

              <div className={s.formaPassword}>
                <input
                  className={s.formaInput}
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="Пароль"
                  
                />
                <label className={s.formaLabel}>Пароль</label>
              </div>
              
              <div className={s.formaPasswordRepeat}>
                <input
                  className={
                    passwordRepeat === password
                      ? s.formaInput
                      : s.formaInputError
                  }
                  type="password"
                  name="passwordRepeat"
                  value={passwordRepeat}
                  onChange={handleChange}
                  placeholder="Повторіть пароль"
                />
                <label className={s.formaLabel}>
                  Повторіть пароль
                </label> 
                {/* <br></br> */}
              
              {passwordRepeat !== password && (
                <span className={s.errorPassword}>Паролі не співпадають</span>
              )}
              </div>
              <button className={s.formaButton} type="submit">
                Зареєструватися
              </button>
            </form>
          
          <div className={s.formaNavigate}>
            <span>Маєте акаунт? </span>
            <NavLink to="/login" className={s.formaNavigateLink}>
              Увійти
            </NavLink>
          </div>
      </div>
    </>
  );
}
export default RegisterForm;
