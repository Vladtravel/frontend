import { useHistory, NavLink } from "react-router-dom";
import { useState } from "react";
// import { useDispatch } from "react-redux";
import operations from "../../redux/operations";
import s from "./RegisterForm.module.css";


function RegisterForm() {
  // const history = useHistory();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_re, setPassword_Re] = useState("");
  
  // const dispatch = useDispatch();


  const handleChange = (e) => {
    switch (e.currentTarget.name) {
      case "email":
        setEmail(e.currentTarget.value);
        break;
      case "password":
        setPassword(e.currentTarget.value);
        break;
    case "password_re":
      setPassword_Re(e.currentTarget.value)
        break;
      default:
        return;
    }
  };


  



  const handleSubmit = (e) => {
    e.preventDefault();
    if ( email.trim() === "" || password.trim() === "" || password_re.trim() === "") {
      alert("Fill all fields!");
      return;
    }
    // dispatch(operations.register({ email, password }));

  
    setEmail("");
    setPassword("");
    setPassword_Re("");

    // history.push("/confirmation");
  };

  return (
    <>
      <div className={s.frontPage}>
        <div className={s.loginForm}>
          <div className={s.loginForm__header}>
            <h1 className={s.loginForm__title}>Реєстрація</h1>
          </div>
          <div className={s.loginFormBody}>
            <form onSubmit={handleSubmit}>
              <div className={s.EmailForm}>
              <div className={s.inputIconEmail}></div>
              <label className={s.loginFormBody__label}>
                {/* E-mail */}
                </label>
                  <input
                    className={s.loginFormBody__input}
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                    autocomplete="off"
                    required
                    placeholder="E-mail"
                  />
                
              </div>
                
                 
              <div className={s.PasswordForm}>
               
                  <div className={s.inputIconPassword}></div>
                  <label className={s.loginFormBody__label}>
                     {/* Пароль */}
                   </label>
                  <input
                    className={s.loginFormBody__input}
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleChange}
                    autocomplete="off"
                    required
                    placeholder="Пароль"
                  />
           </div>
              <div className={s.PasswordFormRepeat}>
                
                  <div className={s.inputIconPassword}></div>
                  
                  <input
                    className={password_re === password ? s.loginFormBody__input : s.loginFormBody__input_error }
                    type="password"
                    name="password_re"
                    value={password_re}
                    onChange={handleChange}
                    placeholder="Повторіть пароль"
                  />
                  <label className={s.loginFormBody__label}>
                        {/* Повторіть пароль */}
                   </label>
               </div>
               { password_re !== password && <span className={s.errorPassword}>
                                              Паролі не співпадають
                                            </span>}
              <button className={s.loginFormBody__button} type="submit">
                Зареєструватися
              </button>
            </form>
          </div>
          <div className={s.loginFormPosition}>
          <span className={s.loginFormSpan}>Маєте акаунт? </span>
          <NavLink to="/login" className={s.loginFormFooter}>
           Увійти
          </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
export default RegisterForm;