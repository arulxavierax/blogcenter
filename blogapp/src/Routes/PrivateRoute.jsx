import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const { isAuth } = useContext();
  if (!isAuth) {
    return <Navigate to={"/login"} />;
  }
  return children;
}

export default PrivateRoute;
