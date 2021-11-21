import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router";
import selectors from "../redux/selectors";

export default function PrivateRoute({
  redirectTo = "/signup",
  children,
  ...routeProps
}) {
  const isLoggedIn = useSelector(selectors.isAuthenticated);

  return (
    <Route {...routeProps}>
      {isLoggedIn ? children : <Redirect to={redirectTo} />}
    </Route>
  );
}
