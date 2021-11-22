import s from "./fastAccessTemplate.module.css";
import { useRouteMatch, Link } from "react-router-dom";

function FastAccessTemplate({
  currentDate,
  setCurrentDate,
  sprintName,
  id,
  current,
  setPage,
}) {
  const { url } = useRouteMatch();
  const currentProjects = url.split("/")[2];
  // const currentSprint = url.split("/")[4];
  const style = {
    backgroundColor: `#${(Math.random().toString(16) + "000000")
      .substring(2, 8)
      .toUpperCase()}`,
  };
  return (
    <Link
      onClick={() => {
        setCurrentDate(currentDate);
        setPage(1);
      }}
      to={`/projects/${currentProjects}/sprints/${id}`}
      className={s.item}
    >
      <div className={s.wrapper}>
        <div style={style} className={s.div}></div>
        {id === current ? (
          <p className={s.textCurrent}>{sprintName}</p>
        ) : (
          <p className={s.text}>{sprintName}</p>
        )}
      </div>
    </Link>
  );
}
export default FastAccessTemplate;
