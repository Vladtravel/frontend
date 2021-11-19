import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import selectors from "../redux/selectors";

export default function PublicRouter({
  children,
  redirectTo = "/projects",
  restricted = false,
  ...routeProps
}) {
  const isLoggedIn = useSelector(selectors.isAuthenticated);

  const shouldRedirect = isLoggedIn && restricted;

  return (
    <Route {...routeProps}>
      {shouldRedirect ? <Redirect to={redirectTo} /> : children}
    </Route>


  );
}