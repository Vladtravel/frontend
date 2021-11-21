import s from "./AnalyticsButton.module.css";
import { ReactComponent as Analyticlogo } from "./analyticlogo.svg";

const IconButton = ({ onClick }) => {
  return (
    <button className={s.analyticsBtn} onClick={onClick}>
      <Analyticlogo />
    </button>
  );
};

export default IconButton;
