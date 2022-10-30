import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children }) {
  const isAuth = JSON.parse(localStorage.getItem("token"));
  if (!isAuth) {
    return <Navigate to={"/signin"} />;
  }
  return children;
}

export default PrivateRoute;
