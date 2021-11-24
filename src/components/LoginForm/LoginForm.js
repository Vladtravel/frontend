import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import operations from "../../redux/operations";
import s from "./LoginForm.module.css";
import BackgroundAuth from "../BackgroundAuth/BackgroundAuth";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

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
    dispatch(operations.logIn({ email, password }));
    setEmail("");
    setPassword("");
  };

  return (
    <>
    <BackgroundAuth/>
    <div className={s.forma}>
          <form onSubmit={handleSubmit}>
          <h1 className={s.formaTitle}>Вхід</h1>
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
              
              <button className={s.formaButton} type="submit">
              Увійти
              </button>
            </form>
          
          <div className={s.formaNavigate}>
            <span>Немає акаунту? </span>
            <NavLink to="/" className={s.formaNavigateLink}>
            Зареєструватись
            </NavLink>
          </div>
      </div>
    </>
  );
}
export default LoginForm;