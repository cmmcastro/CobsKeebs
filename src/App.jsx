import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";

import Home from "./components/Home";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import NavBarSignInUp from "./components/NavBar/NavBarSignInUp";
import PrivateRoute from "./components/PrivateRoute";
import { AuthProvider } from "./components/Context/AuthContext";

function App() {
  return (
    <>
      <NavBarSignInUp />
      <Container>
        <div>
            <Router>
              <AuthProvider>
                <Routes>
                  {/* <Route exact path="/" component={<PrivateRoute />}>
                    <Route path="/" element={<Home />} />
                  </Route> */}
                  <Route exact path="/" component={Home} />
                  <Route path="/sign-up" component={SignUp} />
                  <Route path="/sign-in" component={SignIn} />
                </Routes>
              </AuthProvider>
            </Router>
        </div>
      </Container>
    </>
  );
}

export default App;
