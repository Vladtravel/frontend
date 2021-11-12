import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import s from "./App.module.css";
import Modal from "../Modal";
import BackgroundAuth from "../BackgroundAuth/BackgroundAuth";
import Button from "../Modal/Button";
import Header from "../Header/Header";
import RegisterForm from "../RegisterForm"

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <BackgroundAuth />
        <Header />
        {/* <RegisterForm/> */}
        <Switch>
        <Route path="/signup" component={RegisterForm} />
        </Switch>

        <div className={s.App}>GOOD DAY!</div>
        <Button onClick={toggleModal} text={"Open modal"} />
        {showModal && (
          <Modal onClose={toggleModal}>
            <Button onClick={toggleModal} text={"Close modal"} />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default App;
