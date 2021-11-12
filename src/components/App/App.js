import BackgroundAuth from "../BackgroundAuth/BackgroundAuth";
import Header from "../Header/Header";
import s from "./App.module.css";

function App() {
  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <BackgroundAuth />
        <Header />
        <div className={s.App}>GOOD DAY!</div>
      </div>
    </div>
  );
}

export default App;
