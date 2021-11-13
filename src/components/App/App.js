import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import s from "./App.module.css";
import Modal from "../Modal";
import BackgroundAuth from "../BackgroundAuth/BackgroundAuth";
import Header from "../Header/Header";
import RegisterForm from "../RegisterForm";
import LoginForm from "../LoginForm"

function App() {
  return (
    <>
    <Header />
    <div className={s.container}>
      <BackgroundAuth />
      {/* <RegisterForm /> */}
    </div>
    <Routes>
      <Route path="signup" element={<RegisterForm />} />
      <Route path="login" element={<LoginForm />} />
        {/* <Route path="/signup" component={RegisterForm} /> */}
      </Routes>
    </>
  );
}

export default App;
