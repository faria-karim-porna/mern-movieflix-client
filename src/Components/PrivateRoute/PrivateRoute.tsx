import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";

type PrivateRouteProps = {
  path: string;
};
const PrivateRoute = (props: React.PropsWithChildren<PrivateRouteProps>) => {
  const email = localStorage.getItem("email");
  return (
    <Route
      path={props.path}
      render={({ location }) =>
        email ? (
          props.children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
