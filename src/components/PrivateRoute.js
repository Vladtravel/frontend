import React from "react";
import {  Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import selectors from "../redux/selectors";

/**
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на /login
 */
// const PrivateRoute = ({ component: Component, redirectTo, ...routeProps }) => {
//   const isAuthenticated = useSelector(selectors.isAuthenticated);

//   return (
//     <Route
//       {...routeProps}
//       render={(props) =>
//         isAuthenticated ? (
//           <Component {...props} />
//         ) : (
//           <Navigate to={redirectTo} />
//         )
//       }
//     />
//   );
// };

// export default PrivateRoute;

function PrivateRoute({ children, redirectTo }) {
  let isAuthenticated = useSelector(selectors.isAuthenticated);
  return isAuthenticated ? children : <Navigate to={redirectTo} />;
}
export default PrivateRoute;