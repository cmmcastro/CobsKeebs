// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwnerpLnHRFOtLqCyQJWo0xuKTQSOuePc",
  authDomain: "cobskeebs-a7ad4.firebaseapp.com",
  databaseURL: "https://cobskeebs-a7ad4-default-rtdb.firebaseio.com",
  projectId: "cobskeebs-a7ad4",
  storageBucket: "cobskeebs-a7ad4.appspot.com",
  messagingSenderId: "256462441099",
  appId: "1:256462441099:web:0666675cb4bcacd4bde28e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
export const database = getDatabase(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

export default app;