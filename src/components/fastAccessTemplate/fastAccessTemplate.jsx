import s from "./fastAccessTemplate.module.css";
function FastAccessTemplate({ sprintName, id, current }) {
  const style = {
    backgroundColor: `#${(Math.random().toString(16) + "000000")
      .substring(2, 8)
      .toUpperCase()}`,
  };
  return (
    <div className={s.item}>
      <div className={s.wrapper}>
        <div style={style} className={s.div}></div>
        {id === current ? (
          <p className={s.textCurrent}>{sprintName}</p>
        ) : (
          <p className={s.text}>{sprintName}</p>
        )}
      </div>
    </div>
  );
}
export default FastAccessTemplate;
