import { NavLink } from "react-router-dom";
import SingleSprint from "../Sprint/SingleSprint";
import s from "./ProjectSprints.module.css"


function ProjectSprints(){

return(
    <div className={s.Sprints}>
    <div className={s.menuSprints}>
            <span className={s.iconLink}></span>
            <NavLink to="/projects" className={s.menuLink}>
                Показати проекти 
            </NavLink>
    </div>
    <div>
        <SingleSprint/> 
    </div>
    
    </div>
)
}
export default ProjectSprints;