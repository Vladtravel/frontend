import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouteMatch } from "react-router-dom";

import { getAllProjects } from "../../redux/projects/projects-selectors";
import { fetchProjects } from "../../redux/projects/projects-operations";
import ProjectButtonAdd from "../ProjectList/ProjectButtonAdd";
import s from "./Sidebar.module.css";

function Sidebar() {
  const getProjects = useSelector(getAllProjects);
  const { url } = useRouteMatch();
  const currentProjects = url.split("/")[2];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  return (
    <div className={s.menuSprints}>
      <div className={s.menuNav}>
        <NavLink to="/projects" className={s.menuLink}>
          <span className={s.iconLink}></span>
          Показати проекти
        </NavLink>
      </div>
      <div className={s.menuProjects}>
        <ul className={s.item}>
          {getProjects.map(({ name, _id }) => {
            return (
              <li key={_id} className={s.menuProjectLink}>
                <NavLink to={`/projects/${_id}/sprints`} className={s.link}>
                  <div className={s.menuProjectIcon}></div>
                  {currentProjects === _id ? (
                    <h3 className={s.subtitleCurrent}>{name}</h3>
                  ) : (
                    <h3 className={s.subtitle}>{name}</h3>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={s.menuAdd}>
        <ProjectButtonAdd className={"btnIconAddProject"} />
        <samp className={s.text}>Створити проект</samp>
      </div>
    </div>
  );
}
export default Sidebar;
