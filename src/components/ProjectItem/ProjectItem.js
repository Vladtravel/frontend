import { Link, useRouteMatch } from "react-router-dom";
import s from "./ProjectItem.module.css";

const randomColor = [
  "rgba(255, 107, 8)",
  "rgba(140, 114, 223)",
  "rgba(113, 223, 129)",
  "rgba(60, 114, 223)",
  "rgba(113, 191, 231)",
];

const ProjectItem = ({ projects }) => {
  const { url } = useRouteMatch();

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
            <Link to={`${url}/${id}/sprints`} className={s.link}>
              <h3 className={s.subtitle}>{name}</h3>
              <p className={s.text}>{description}</p>
              <button className={s.iconDelete} aria-label="delete"></button>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectItem;
