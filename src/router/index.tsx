import React, { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { AuthContext } from "../context/userInfo";
import Home from "../pages/Home";
import Login from "../pages/login";
import SignUp from "../pages/signup";
import TodoFactory from "../pages/todo/TodoFactory";

export default function Router() {
  const { state, dispatch } = useContext(AuthContext);

  return (
    <Routes>
      {state.token ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="todofactory" element={<TodoFactory />} />
        </>
      ) : (
        <>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </>
      )}
    </Routes>
  );
}
