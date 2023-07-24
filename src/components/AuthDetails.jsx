import React, { useEffect, useState } from 'react'

/* firebase imports */
import auth from "../firebase";
import { onAuthStateChanged, signOut } from 'firebase/auth';

const AuthDetails = () => {
    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const lsiten = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else{
                setAuthUser(null);
            }
        })

        /* return () => {
            listen();
        } */
    }, []);

    const userSignOut = () => {
        signOut(auth).then(() => {
            console.log('Signed out successfully');
        }).catch(error => console.log(error));
    }

    return (
        <div className='feed'>
           { authUser ? <><p>Signed In</p><button onClick={userSignOut}>Signed Out</button></> : <p>Signed Out</p>} 
        </div>
    );
}

export default AuthDetails;