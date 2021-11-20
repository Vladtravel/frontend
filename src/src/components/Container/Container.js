import s from "./Container.module.css";
function Container({ children }) {
  return <div className={s.Container}>{children}</div>;
}
export default Container;
