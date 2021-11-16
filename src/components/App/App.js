import { Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Header from "../Header/Header";
import RegisterForm from "../RegisterForm";
import LoginForm from "../LoginForm";
import ProjectList from "../ProjectList";
import Container from "../Container/Container";
import operations from "../../redux/operations";
import ConfirmView from "../ConfirmView";
// import SingleSprint from "../Sprint/SingleSprint"
import PrivateRoute from "../PrivateRoute";
import PublicRoute from "../PublicRoute"

function App() {

const dispatch = useDispatch();

  useEffect(() => {
    dispatch(operations.getCurrentUser());
  }, [dispatch]);

return (
    <>

     <Header/>
      <Switch>
        <Route path="/" exact component={RegisterForm } />
        <PublicRoute path="/login"  component={LoginForm} />
        <Route path="/confirmation" component={ConfirmView} />
        <Container>
        <Route path="/projects" component={ProjectList}/>
        </Container>
        <PublicRoute
          path="/login"
          component={LoginForm}
          restricted
          redirectTo="/projects"
        />
      
      
        <PrivateRoute
          path="/login"
          component={ProjectList}
          redirectTo="/projects"
        />  
      
    
</Switch> 


    </>
  );
}

export default App;