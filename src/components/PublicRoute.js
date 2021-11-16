import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import selectors from "../redux/selectors";

/**
 * - Если маршрут ограниченный, и пользователь залогинен, рендерит редирект на /contacts
 * - В противном случае рендерит компонент
 */
const PublicRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isAuthenticated = useSelector(selectors.isAuthenticated);
  console.log(isAuthenticated);
  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated && routeProps.restricted ? (
          <Redirect to={redirectTo} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default PublicRoute;
