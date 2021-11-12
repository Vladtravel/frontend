import { useState } from "react";
import s from "./App.module.css";
import Modal from "../Modal";
import Button from "../Modal/Button";
import Header from '../Header/Header';

function App() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Header />
      <div className={s.App}>GOOD DAY!</div>
      <Button onClick={toggleModal} text={"Open modal"} />
      {showModal && (
        <Modal onClose={toggleModal}>
          <Button onClick={toggleModal} text={"Close modal"} />
        </Modal>
      )}
    </>
  );
}

export default App;
