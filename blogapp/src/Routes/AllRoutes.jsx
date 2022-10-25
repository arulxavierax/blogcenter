import React from "react";
import { Route, Routes } from "react-router-dom";
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
      <Route path="/addblog" element={<AddBlog />} />
      <Route path="/blog/:id" element={<Blog />} />
    </Routes>
  );
}

export default AllRoutes;
