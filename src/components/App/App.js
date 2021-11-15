import { Route, Routes } from "react-router-dom";
import s from "./App.module.css";
import BackgroundAuth from "../BackgroundAuth/BackgroundAuth";
import Header from "../Header/Header";
import RegisterForm from "../RegisterForm";
import LoginForm from "../LoginForm";
import ProjectList from "../ProjectList";
import Container from "../Container/Container";
import SingleSprint from "../Sprint/SingleSprint";

function App() {
  return (
    <>
      <Container>
        <Header />
        <Routes>
          <Route path="/" element={<RegisterForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/projects" element={<ProjectList />} />
          <Route path="/projects/:projectId" element={<SingleSprint />} />
        </Routes>
      </Container>
      {/* <div className={s.container}>
        <BackgroundAuth />
      </div>
      <Container>
        <ProjectList />
        <SingleSprint />
      </Container> */}
    </>
  );
}

export default App;
