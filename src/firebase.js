// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5VzD1TJ8GIkEKmwUTITgpCbz-W6omt5Q",
  authDomain: "cs-601-final-project-e392f.firebaseapp.com",
  projectId: "cs-601-final-project-e392f",
  storageBucket: "cs-601-final-project-e392f.firebasestorage.app",
  messagingSenderId: "840050958978",
  appId: "1:840050958978:web:a304463e266556db788a9b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore Database
export const db = getFirestore(app);
