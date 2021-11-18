import { Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect, Suspense } from "react";
import Header from "../Header/Header";
import RegisterForm from "../RegisterForm";
import LoginForm from "../LoginForm";
import ProjectList from "../ProjectList";
import Container from "../Container/Container";
import operations from "../../redux/operations";
import ConfirmView from "../ConfirmView";
import SingleSprint from "../Sprint/SingleSprint";
import PrivateRoute from "../PrivateRoute";

import PublicRoute from "../PublicRoute";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Header />

      <Container>
        <Suspense fallback={null}>
          <Switch>
            <PublicRoute exact path="/" restricted>
              <RegisterForm />
            </PublicRoute>

            <PublicRoute exact path="/signup" restricted>
              <RegisterForm />
            </PublicRoute>

            <PublicRoute exact path="/confirmation" restricted>
              <ConfirmView />
            </PublicRoute>

            <PublicRoute path="/login" restricted>
              <LoginForm />
            </PublicRoute>

            <PrivateRoute path="/projects" exact>
              <ProjectList />
            </PrivateRoute>


            <PrivateRoute path="/projects/:projectId/sprints" exact>
              <SingleSprint />

            </PrivateRoute>

            <PrivateRoute path="/projects/:projectId/sprints/:sprintId" restricted>
              <ProjectList />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </Container>
    </>
  );
}

export default App;