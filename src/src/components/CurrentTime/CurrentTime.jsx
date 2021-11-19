import s from "./CurrentTime.module.css";

function CurrentTime(params) {
  const date = new Date();
  return (
    <p
      className={s.text}
    >{`${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`}</p>
  );
}
export default CurrentTime;
