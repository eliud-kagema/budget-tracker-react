import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: ".app",
    messagingSenderId: "",
    appId: "1:27",
    measurementId: "G-"
  };

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Firebase Authentication instance
const auth = getAuth(app);

// Firestore instance
const db = getFirestore(app);

// Export functions for authentication and Firestore
export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword };

