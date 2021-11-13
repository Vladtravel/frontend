import { NavLink } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import s from "./ProjectItem.module.css";

const randomColor = [
  "#FF765F",
  "#8C72DF",
  "#71DF81",
  "#3C72DF",
  "#71BFE7",
  "#FF865F",
];

const ProjectItem = ({ projects }) => {
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
            }}
          >
            <NavLink to={`/projects/${id}`} className={s.link}>
              <h3 className={s.subtitle}>{name}</h3>
              <p className={s.text}>{description}</p>
              <button className={s.iconDelete} aria-label="delete">
                <MdDelete color={color} />
              </button>
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default ProjectItem;
