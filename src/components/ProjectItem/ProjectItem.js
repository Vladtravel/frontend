import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";
import {
  fetchProjects,
  deleteProject,
} from "../../redux/projects/projects-operations";
import {
  getAllProjects,
  getError,
} from "../../redux/projects/projects-selectors";
import s from "./ProjectItem.module.css";

const ProjectItem = () => {
  const projects = useSelector(getAllProjects);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  const { url } = useRouteMatch();

  if (error) {
    return <h2 className={s.error}>Что-то пошло не так </h2>;
  }

  const onClick = (_id) => dispatch(deleteProject(_id));

  return (
    <ul className={s.item}>
      {projects.map(({ name, description, _id }) => {
        return (
          <li key={_id} className={s.list}>
            <Link to={`${url}/${_id}/sprints`} className={s.link}>
              <h3 className={s.subtitle}>{name}</h3>
              <p className={s.text}>{description}</p>
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
  );
};

ProjectItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
};

export default ProjectItem;
