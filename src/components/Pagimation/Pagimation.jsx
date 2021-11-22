// import { useState } from "react";
import Icons from "../icons";
import s from "./Pagimation.module.css";

function Pagination({
  totalPages,
  onNextClick,
  onPreviousClick,
  page,
  setCurrentDate,
}) {
  return (
    <div className={s.div}>
      <button onClick={() => onPreviousClick()} className={s.button}>
        <Icons className={s.icon} name="previous" />
      </button>
      <p className={s.text}>
        <span className={s.page}>{page}</span>/{totalPages}
      </p>
      <button onClick={() => onNextClick()} className={s.button}>
        <Icons className={s.icon} name="next" />
      </button>
    </div>
  );
}
export default Pagination;
