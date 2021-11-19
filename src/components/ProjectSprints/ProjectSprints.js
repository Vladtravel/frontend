import { NavLink } from "react-router-dom";
import SingleSprint from "../Sprint/SingleSprint";
import s from "./ProjectSprints.module.css"
import { useSelector } from "react-redux";
import {getAllProjects} from "../../redux/projects/projects-selectors"
import ProjectButtonAdd from "../ProjectList/ProjectButtonAdd"
import RenameSprint from "../Sprint/RenameSprint";
import AddMember from "../MemberForm/MemberForm";
import ModalCreateSprint from "../ModalCreateSprint/ModalCreateSprint";

const randomColor = [
    "rgba(255, 107, 8)",
    "rgba(140, 114, 223)",
    "rgba(113, 223, 129)",
    "rgba(60, 114, 223)",
    "rgba(113, 191, 231)",
  ];
  
function ProjectSprints(){
    const getProjects = useSelector(getAllProjects);
    
return(
    <div className={s.Sprints}>
    <div className={s.menuSprints}>
            <div className={s.menuNav}>
                <div className={s.iconLink}></div>
                <NavLink to="/projects" className={s.menuLink}>
                    Показати <br></br>проекти 
                </NavLink>
            </div>
            <div className={s.menuProjects}>
            <ul className={s.item}>
      {getProjects.map(({ name, _id }) => {
        const color =
          randomColor[Math.floor(Math.random() * randomColor.length)];
        return (
          <li
            key={_id}
            className={s.menuProjectLink}
          >
            <div 
            className={s.menuProjectIcon}
            style={{
              backgroundColor: color,
              boxShadow: `0px 3px 4px ${color}`,
            }}></div>
            <NavLink to={`/projects/${_id}/sprints`} className={s.link}>
              <h3 className={s.subtitle}>{name}</h3>
            </NavLink>
        
          </li>
        );
      })}
    </ul>
             </div>
            <div className={s.menuAdd}>
                <ProjectButtonAdd className={"projectSprintsAdd"}/>
                <samp>Створити проект</samp>
            </div>
    </div>
    <div>
        <RenameSprint/>
        {/* Сдесь делай кнопку */}
        < AddMember/>
        <SingleSprint/> 
        
    </div>
    <ModalCreateSprint/>
    </div>
)
}
export default ProjectSprints;