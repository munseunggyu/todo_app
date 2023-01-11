import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/login";
import SignUp from "../pages/signup";
import Todo from "../pages/todo";

export default function Router() {
  const [token, setToken] = useState(null);

  useEffect(() => {
    setToken((prev): any => {
      if (localStorage.getItem("Access Token")) {
        return localStorage.getItem("Access Token");
      }
    });
  }, [token]);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="todolist" element={<Todo />} />
    </Routes>
  );
}
