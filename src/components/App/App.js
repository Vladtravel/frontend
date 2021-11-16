import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
// import Modal from "../Modal";
import Header from "../Header/Header";
import RegisterForm from "../RegisterForm";
import LoginForm from "../LoginForm";
import ProjectList from "../ProjectList";
import Container from "../Container/Container";
import operations from "../../redux/operations";
import ConfirmView from "../ConfirmView";
// import SingleSprint from "../Sprint/SingleSprint"
// import PrivateRoute from "../PrivateRoute";
// import PublicRoute from "../PublicRoute"

function App() {
    const dispatch = useDispatch();
  useEffect(() => {
    dispatch(operations.getCurrentUser());
  }, [dispatch]);

  // const isAuthenticated = (state) => state.auth.isAuthenticated;

 return (
    <>
     <Header/>
       <Routes>
        <Route path="/"  element={<RegisterForm />} />
        <Route path="/login"  element={<LoginForm />} />
        <Route path="/confirmation" element={<ConfirmView/>} />
        <Route
          path="/projects"
          element={
            <Container>
              <ProjectList />
            </Container>
          }
        />
      {/* <Route
        path="/login"
        element={
          <PrivateRoute redirectTo="/projects">
            <Container>
              <ProjectList />
            </Container>
          </PrivateRoute>
        }
      /> */}
        
       

      
     
    </Routes> 
    </>
  );
}

export default App;
