import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
// import operations from "../../redux/operations";
import s from "./LoginForm.module.css";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
//   const dispatch = useDispatch();

  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "email":
        setEmail(e.currentTarget.value);
        break;
      case "password":
        setPassword(e.currentTarget.value);
        break;
      default:
        return;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.trim() === "" || password.trim() === "") {
      alert("Fill all fields!");
      return;
    }
    // dispatch(operations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className={s.frontPage}>
        <div className={s.loginForm}>
          <div className={s.loginForm__header}>
            <h1 className={s.loginForm__title}>Вхід</h1>
          </div>
          <div className={s.loginFormBody}>
            <form onSubmit={handleSubmit}>
              <div className={s.EmailForm}>
              <div className={s.inputIconEmail}></div>
                  <input
                    className={s.loginFormBody__input}
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    autocomplete="off"
                    required
                  />
                  <label className={s.loginFormBody__label}>
                E-mail
                </label>
              </div>
                
                 
              <div className={s.PasswordForm}>
               
                  <div className={s.inputIconPassword}></div>
                  <input
                    className={s.loginFormBody__input}
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    autocomplete="off"
                    required
                  />
                   <label className={s.loginFormBody__label}>
                Пароль
                </label>
                
              </div>
             
               {/* <span>Паролі не співпадають</span> */}
              <button className={s.loginFormBody__button} type="submit">
              Увійти
              </button>
            </form>
          </div>
          <div className={s.loginFormPosition}>
          <span className={s.loginFormSpan}>Немає акаунту? </span>
          <NavLink to="/signup" className={s.loginFormFooter}>
          Зареєструватись
          </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginForm;