import Icons from "../icons";
import s from "./Title.module.css";
function Title(params) {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}>Some text</h1>
      <button
        className={s.btn}
        onClick={() => {
          console.log(1);
        }}
      >
        <Icons className={s.icon} name="change" />
      </button>
    </div>
  );
}
export default Title;
