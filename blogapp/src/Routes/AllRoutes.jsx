import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgetForm from "../components/ForgetForm";
import PrivateRoute from "../hoc/PrivateRoute";
import AddBlog from "./AddBlog";
import Blog from "./Blog";
import HomePage from "./HomePage";
import Signin from "./Signin";
import Signup from "./Signup";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forget-password" element={<ForgetForm />} />
      <Route
        path="/addblog"
        element={
          <PrivateRoute>
            <AddBlog />
          </PrivateRoute>
        }
      />
      <Route
        path="/blog/:id"
        element={
          <PrivateRoute>
            <Blog />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}

export default AllRoutes;
