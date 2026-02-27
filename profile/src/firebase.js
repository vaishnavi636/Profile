// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA8zrbZ-86iweEQDW24FwoOdq3tWyLizxg",
  authDomain: "profile-5908f.firebaseapp.com",
  projectId: "profile-5908f",
  storageBucket: "profile-5908f.firebasestorage.app",
  messagingSenderId: "853048347792",
  appId: "1:853048347792:web:67c9ef95526bbbfbb6dc15",
  measurementId: "G-TK9JTXDKG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);