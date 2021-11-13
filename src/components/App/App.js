import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import s from "./App.module.css";
import Modal from "../Modal";
import BackgroundAuth from "../BackgroundAuth/BackgroundAuth";
import Header from "../Header/Header";
import RegisterForm from "../RegisterForm";

function App() {
  return (
    <>
    <Header />
    <div className={s.container}>
      <BackgroundAuth />
      
      {/* <RegisterForm /> */}
      <Routes>
        <Route path="/signup" component={RegisterForm} />
      </Routes>
    </div>
    </>
  );
}

export default App;
