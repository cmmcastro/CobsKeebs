import React, { useState, useContext } from "react";
import { useNavigate, Link, Navigate } from 'react-router-dom';
import "./FormAppearance.css";

/* firebase imports */
/* import auth from "../../firebase";
import database from "../../firebase"; */
import { getDatabase, set, ref } from 'firebase/database'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";

const auth = getAuth(app);
const database = getDatabase(app);

function SignUpForm() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');

    const [errorMessage, setErrorMessage] = useState('');
    const [errorMessage2, setErrorMessage2] = useState('');

    const signUp = (e) => {
        e.preventDefault();

        if (email === '' || password === '' || confirmpassword === '') {
            setErrorMessage2("Fill up all the fields!");
        } else if (password !== confirmpassword) {
            setErrorMessage2("Passwords inputted are not the same!")
        } else {
            createUserWithEmailAndPassword(auth,email,password)
                .then(userCredential => {
                    const uid = userCredential.user.uid
                    const email = userCredential.user.email
                    set(ref(database,'/users/'+username), {
                        uid,
                        email,
                        username,
                    })

                    navigate("/sign-in");
                })
                .catch((error) => {
                    switch (error.code) {
                        case 'auth/email-already-in-use':
                            alert("Email address already in use!");
                            break;
                        case 'auth/invalid-email':
                            alert("Email address is invalid");
                            break;
                        case 'auth/username-already-in-use':
                            alert("Username already in use!");
                            break;
                        default:
                            alert(error.message);
                            break;
                    }
                })
        } 
    }

    return (
        <div className="form-container">
            <div className="form-box">
                <h1>Sign Up</h1>
                <form className="signupForm" onSubmit={signUp}>
                    <div className="input-group">
                        <h4>Name</h4>
                        <div className="input-field">
                            <input
                                type="text"
                                placeholder="Enter your name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>
                        <h4>Username</h4>
                        <div className="input-field">
                            <input
                                type="text"
                                className="username"
                                placeholder="Enter your username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </div>
                        <h4>Email</h4>
                        <div className="input-field">
                            <input 
                                type="Enter your email"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <h4>Password</h4>
                        <div className="input-field">
                            <input
                                type="password"
                                placeholder="Enter your password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <h4>Confirm Password</h4>
                        <div className="input-field">
                            <input
                                type="password"
                                placeholder="Re-enter your password"
                                value={confirmpassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                            />
                        </div>
                        <div className="button-field">
                            <button type="submit" className="submit">Sign Up</button>
                        </div>
                        {errorMessage === '' ? null : {errorMessage}}
                    </div>
            </form>
            </div>
        </div>
    )
}

export default SignUpForm;