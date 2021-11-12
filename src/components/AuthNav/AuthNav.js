import { NavLink } from "react-router-dom";
import "./AuthNav.css";
function AuthNav() {
  return (
    <div className="authNav">
      <NavLink to="/register" className="link" activeClassName="activeLink">
        Реєстрація
      </NavLink>
      <NavLink to="/login" className="link" activeClassName="activeLink">
        Вхід
      </NavLink>
    </div>
  );
}
export default AuthNav;