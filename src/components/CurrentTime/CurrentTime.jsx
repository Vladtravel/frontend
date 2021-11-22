import s from "./CurrentTime.module.css";

function CurrentTime({ currentDate }) {
  const date = new Date(currentDate);
  return (
    <p className={s.text}>{`${date.getDate()}.${
      date.getMonth() + 1
    }.${date.getFullYear()}`}</p>
  );
}
export default CurrentTime;
