import React, { useState, useContext } from "react";
import { useNavigate, Link, Navigate } from 'react-router-dom';
import "./FormAppearance.css";

/* firebase imports */
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";

const auth = getAuth(app);

function SignInForm() {
const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            //const user = userCredential.user;
            navigate("/");
            console.log("Logged in!");
        })
        .catch((error) => {
            setErrorMessage('Invalid username or password!');
            //console.log(error);
        })
    }

/*     if (sessionInfo.loggedIn) {
        navigate("/");
    } */

    return (
        <div className="form-container">
            <div className="form-box">
                <h1>Sign In</h1>
                <form onSubmit={signIn}>
                    <div className="input-group">
                        <h4>Email</h4>
                        <div className="input-field">
                            <input 
                                type="email"
                                id="email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <h4>Password</h4>
                        <div className="input-field">
                            <input
                                type="password"
                                id="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="button-field">
                        <button type="submit" id="signin">Sign In</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignInForm;