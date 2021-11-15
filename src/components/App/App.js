
import { Route, Routes } from "react-router-dom";
// import { useState } from "react";
import s from "./App.module.css";
// import Modal from "../Modal";
import BackgroundAuth from "../BackgroundAuth/BackgroundAuth";
import Header from "../Header/Header";
import RegisterForm from "../RegisterForm";
import LoginForm from "../LoginForm";
import ProjectList from "../ProjectList";
import Container from "../Container/Container";
import SingleSprint from "../Sprint/SingleSprint"


function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route
          path="/projects"
          element={
            <Container>
              <ProjectList />
            </Container>
          }
        />
        <Route path="/projects/:projectId" element={<h1>Hello World</h1>} />

      </Routes>
    <div className={s.container}>
      <BackgroundAuth />
    </div>
      <Container>
        <ProjectList />
        < SingleSprint/>
      </Container>
      
     
      

    </>
  );
}

export default App;
