// src/routes/PrivateRoute.jsx
import React, { useContext } from "react";
import { Route, Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const PrivateRoutes = ({ children, ...rest }) => {
  const { currentUser } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        currentUser ? (
          children
        ) : (
          <Navigate to="/login" state={{ from: location }} />
        )
      }
    />
  );
};

export default PrivateRoutes;
