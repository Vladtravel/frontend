import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getUserState } from "../../redux/selectors";
// import { getUser } from "../../redux/actions";
import css from "./Header.module.css";
import operations from "../../redux/operations";

const Header = () => {
  // const user = useSelector((state) => getUserState(state));

  const dispatch = useDispatch();

  // const logOut = () => {
  //   dispatch(getUser(null));
  // };
  return (
    <header className={css.header}>
      <div className={css.header__wrapper}>
        <a href="/"><span className={css.header_logo}></span></a>

        <div className={css.header__login_wrapper}>
          <p className={css.header__login_name}>{'User.username'}</p>

          <button
            onClick={() => dispatch(operations.logOut())}
            className={css.header__logout_button}
          ></button>
        </div>
      </div>
    </header>
  );
};

export default Header;