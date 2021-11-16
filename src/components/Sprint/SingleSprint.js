import React from "react";

import s from "./SingleSprint.module.css";

const SingleSprint = ({ sprint, deleteSprint, history, id }) => {
  const openSprintPage = () => {
    // history.push()
  };
  return (
    <li className={s.single__item}>
      <div className={s.single__card}>
        <h3 className={s.card__header}>Sprint Burndown Chart 1 </h3>
        <div className={s.sprint__wrapper} onClick={openSprintPage}>
          <p className={`${s.card__content} ${s.card__content_header}`}>
            Дата початку
          </p>
          <p className={`${s.card__content} ${s.card__content_info}`}>23 Jun</p>
          <p className={`${s.card__content} ${s.card__content_header}`}>
            Дата закінчення
          </p>
          <p className={`${s.card__content} ${s.card__content_info}`}>12 Jun</p>
          <p className={`${s.card__content} ${s.card__content_header}`}>
            Тривалість
          </p>
          <p
            className={`${s.card__content} ${s.card__content_info} ${s.card__content_duration}`}
          >
            24
          </p>
        </div>
        <button
          className={s.card__button}
          aria-label="delete"
          onClick={deleteSprint}
        ></button>
      </div>
    </li>
  );
};

export default SingleSprint;
