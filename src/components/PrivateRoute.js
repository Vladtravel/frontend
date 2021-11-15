import React from "react";
import { Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import selectors from "../redux/selectors";

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */
const PrivateRoute = ({ component: Component, redirectTo, ...routeProps }) => {
  const isAuthenticated = useSelector(selectors.isAuthenticated);

  return (
    <Route
      {...routeProps}
      render={(props) =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Navigate to={redirectTo} />
        )
      }
    />
  );
};

export default PrivateRoute;