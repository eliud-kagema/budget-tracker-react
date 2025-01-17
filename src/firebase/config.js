import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyCoC2u7OblyBnvRzXpZWyxZR3XzRPYIAP8",
    authDomain: "react-firebase-app-ef528.firebaseapp.com",
    projectId: "react-firebase-app-ef528",
    storageBucket: "react-firebase-app-ef528.firebasestorage.app",
    messagingSenderId: "279247610656",
    appId: "1:279247610656:web:2cce99938f9c382813ad45",
    measurementId: "G-S6ENL8R4WT"
  };

// Initialize Firebase app
const app = initializeApp(firebaseConfig);

// Firebase Authentication instance
const auth = getAuth(app);

// Firestore instance
const db = getFirestore(app);

// Export functions for authentication and Firestore
export { auth, db, createUserWithEmailAndPassword, signInWithEmailAndPassword };

