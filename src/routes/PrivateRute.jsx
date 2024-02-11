import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import { AuthContext } from "../auth/AuthContext";

const PrivateRute = () => {
  const { currentUser } = useContext(AuthContext);

  if (!currentUser) {
    return (
      <div>
        <p>Nu ai voie să accesezi această pagină, trebuie să te loghezi.</p>
        <Navigate to="/login" />
      </div>
    );
  }

  return <Outlet />;
};

export default PrivateRute;
