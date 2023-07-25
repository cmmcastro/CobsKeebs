import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "../Home";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import Name from "../Name/Name";
import "./NavBarSignInUp.css";
import PrivateRoute from "../PrivateRoute";

function NavBarSignInUp() {
    return (
        <>
        <BrowserRouter>
            <header>
                <nav>
                    <div className="name-container">
                        <Name />
                    </div>
                    <NavLink to={"/"}>Home</NavLink>
                    <NavLink to={"/sign-in"}>Sign In</NavLink>
                    <NavLink to={"/sign-up"}>Sign Up</NavLink>
                    <Link to={"https://www.facebook.com/cobskeebs"}><img src="facebook.png" alt="facebook-logo" width="30px" height="30px" /></Link>
                </nav>
            </header>
                <main>
                    <Routes>
                        {/* <Route path="/" element={<PrivateRoute />} /> */}
                        <Route path="/" element={<Home />} />
                        <Route path="sign-in" element={<SignIn />} />
                        <Route path="sign-up" element={<SignUp />} />
                    </Routes>

                </main>
        </BrowserRouter>
        </>
    );
}

export default NavBarSignInUp;