import React, { useState } from "react";
import "./FormAppearance.css";

/* firebase imports */
import auth from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

function SignInForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            console.log(userCredential);
        })
        .catch((error) => {
            console.log(error);
        })
    }

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