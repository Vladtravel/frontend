import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import SingleSprint from "../Sprint/SingleSprint";
import s from "./ProjectSprints.module.css"

// projects = useSelector(fechPpro)
function ProjectSprints(){

return(
    <div className={s.Sprints}>
    <div className={s.menuSprints}>
            <div className={s.menuNav}>
                <span className={s.iconLink}></span>
                <NavLink to="/projects" className={s.menuLink}>
                    Показати <br></br>проекти 
                </NavLink>
            </div>
            <div className={s.menuProjects}>
                <ul>
                <li><NavLink to="/projects/1" className={s.menuLink}>
                    Проект 1
                    </NavLink>
                </li>
                <li><NavLink to="/projects/2" className={s.menuLink}>
                    Проект 2
                    </NavLink>
                </li>
                <li><NavLink to="/projects/3" className={s.menuLink}>
                    Проект 3
                    </NavLink>
                </li>
                 
                </ul>
             </div>
            <div className={s.menuAdd}>
                <samp>Створити проект</samp>
            </div>
    </div>
    <div>
        <SingleSprint/> 
    </div>
    
    </div>
)
}
export default ProjectSprints;