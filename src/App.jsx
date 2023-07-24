import React from "react";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import NavBarSignInUp from "./components/NavBar/NavBarSignInUp";

function App() {
  return (
    <>
      <NavBarSignInUp />
    </>
  );
}

export default App;
