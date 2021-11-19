import React from "react";
import { useDispatch, useSelector } from "react-redux";
import css from "./Header.module.css";
import operations from "../../redux/operations";
import selectors from "../../redux/selectors";

const Header = () => {
  const auth = useSelector(selectors.isAuthenticated);

  const email = useSelector(selectors.getUserEmail);
  const dispatch = useDispatch();

  return (
    <header className={css.header}>
      <div className={css.header__wrapper}>
        <a href="/signup">
          <span className={css.header_logo}></span>
        </a>
        
        { auth && (
        <div className={css.header__login_wrapper}>
          <p className={css.header__login_name}>{email}</p>

          <button
            onClick={() => dispatch(operations.logOut())}
            className={css.header__logout_button}
          ></button>
        </div>
        )}
      </div>
    </header>
  );
};

export default Header;
