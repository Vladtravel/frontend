import { useEffect } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import Loader from "react-loader-spinner";
import {
  deleteProject,
  fetchProjects,
} from "../../redux/projects/projects-operations";
import {
  getVisibleProjects,
  getError,
  getLoading,
} from "../../redux/projects/projects-selectors.js";

import s from "./ProjectItem.module.css";

const randomColor = [
  "rgba(255, 107, 8)",
  "rgba(140, 114, 223)",
  "rgba(113, 223, 129)",
  "rgba(60, 114, 223)",
  "rgba(113, 191, 231)",
];

const ProjectItem = () => {
  const projects = useSelector(getVisibleProjects);
  const loader = useSelector(getLoading);
  const error = useSelector(getError);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, [dispatch]);

  if (loader) {
    return <Loader type="ThreeDots" color="#51cde6" className={s.loader} />;
  }

  if (error) {
    return <h2 className={s.error}>Что-то пошло не так :(</h2>;
  }

  const onClick = (id) => dispatch(deleteProject(id));

  return (
    <ul className={s.item}>
      {projects.map(({ name, description, id }) => {
        const color =
          randomColor[Math.floor(Math.random() * randomColor.length)];
        return (
          <li
            key={id}
            className={s.list}
            style={{
              backgroundColor: color,
              boxShadow: `0px 3px 4px ${color}`,
            }}
          >
            <Link to={`/projects/${id}`} className={s.link}>
              <h3 className={s.subtitle}>{name}</h3>
              <p className={s.text}>{description}</p>
              <button
                className={s.iconDelete}
                onClick={() => onClick(id)}
                type="button"
                aria-label="delete"
              ></button>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

ProjectItem.propTypes = {
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      // id: PropTypes.string.isRequired,
    })
  ),
  filter: PropTypes.string,
};

export default ProjectItem;
