import React from "react";
import { useAuth } from "./Context/AuthContext";
import { Route, Navigate, Outlet } from "react-router-dom";

import AuthDetails from "./AuthDetails";

/* function PrivateRoute({ component: Component, ...rest }) {
    const { currentUser } = useAuth();

    return (
        <Route
            {...rest}
            render={ props => {
                return currentUser ? <Component {...props} /> : <Redirect to="/sign-in" />
            }}
        ></Route>
    );
} */

const PrivateRoute = () => {
    const { currentUser } = AuthDetails;

    return currentUser ? <Outlet /> : <Navigate to="/sign-in" />;
}

export default PrivateRoute;