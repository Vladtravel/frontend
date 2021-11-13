import { Route, Routes, PublicRoute } from "react-router-dom";
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
     <Routes>
      <Route path="/" element={<RegisterForm />} />
      <Route path="/login" element={<LoginForm />} />
      </Routes>
    <div className={s.container}>
      <BackgroundAuth />
    </div>
    </>
  );
}

export default App;
