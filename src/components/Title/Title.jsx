import Icons from "../icons";
import s from "./Title.module.css";
import { useState } from "react";
import { getAllSprints } from "../../redux/sprint/selectors";
import { useRouteMatch } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { sprintNameChange } from "../../redux/sprint/operation";

function Title(params) {
  const [isNameChaged, setIsNameChaged] = useState(true);
  const { url } = useRouteMatch();
  const currentProjects = url.split("/")[2];
  const currentSprintId = url.split("/")[4];
  const sprints = useSelector(getAllSprints);
  const currentSprint = sprints.find((e) => e._id === currentSprintId);
  console.log(currentProjects, "currentProjects");
  console.log(currentSprintId, "currentSprintId");

  const [text, setText] = useState(currentSprint.name);
  console.log(sprints);
  const dispatch = useDispatch();
  const onNameChange = (data) => {
    return dispatch(sprintNameChange(data));
  };
  return (
    <div className={s.wrapper}>
      {isNameChaged ? (
        <h1 className={s.title}>{currentSprint.name}</h1>
      ) : (
        <input
          value={text}
          onChange={(e) => {
            const { value } = e.currentTarget;
            setText(value);
          }}
          onBlur={() => {
            const data = {
              currentProjects,
              currentSprint: currentSprintId,
              name: text,
            };
            onNameChange(data);
            setIsNameChaged((s) => !s);
          }}
          type="text"
        />
      )}
      <button
        className={s.btn}
        onClick={() => {
          setIsNameChaged((s) => !s);
        }}
      >
        <Icons className={s.icon} name="change" />
      </button>
    </div>
  );
}
export default Title;
