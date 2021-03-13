import React from "react";
import { Route, Redirect } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";

// A router check if a user can access this route.
// If there is no currentUser, then redirect to /login
function PrivateRoute({ children, ...rest }) {
  const { currentUser } = useAuth();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser ? (
          children
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
}

export default PrivateRoute;
