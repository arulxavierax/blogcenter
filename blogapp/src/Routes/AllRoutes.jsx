import React from "react";
import { Route, Routes } from "react-router-dom";
import AddBlog from "./AddBlog";
import Intro from "./Intro";
import Signin from "./Signin";
import Signup from "./Signup";

function AllRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Intro />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/addblog" element={<AddBlog />} />
    </Routes>
  );
}

export default AllRoutes;
