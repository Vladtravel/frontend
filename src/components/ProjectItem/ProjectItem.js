import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import Loader from "react-loader-spinner";
import {
  fetchProjects,
  deleteProject,
} from "../../redux/projects/projects-operations";
import {
  getAllProjects,
  getLoading,
  getError,
} from "../../redux/projects/projects-selectors";
import s from "./ProjectItem.module.css";

const ProjectItem = () => {
  const projects = useSelector(getAllProjects);
  const loader = useSelector(getLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const { url } = useRouteMatch();

  if (loader) {
    return <Loader type="Circles" color="#FF6B08" className={s.loader} />;
  }

  if (error) {
    return <h2 className={s.error}>Что-то пошло не так </h2>;
  }

  const onClick = (_id) => dispatch(deleteProject(_id));

  return (

    <>
      {projects.length === 0 && (
        <h2 className={s.emptyList}>
          Ваша колекція проектів порожня, скористайтесь кнопкою "Створити
          проект"
        </h2>
      )}

    <ul className={s.item}>
      {projects.map(({ name, description, _id }) => {
        return (
          <li key={_id} className={s.list}>
            <Link to={`${url}/${_id}/sprints`} className={s.link}>
              <div className={s.overlay}>
                <h3 className={s.subtitle}>{name}</h3>
                <p className={s.text}>{description}</p>
              </div>
            </Link>
            <button
              className={s.iconDelete}
              onClick={() => onClick(_id)}
              aria-label="delete"
            ></button>
          </li>
        );
      })}
    </ul>
    </>
  );
};

export default ProjectItem;
