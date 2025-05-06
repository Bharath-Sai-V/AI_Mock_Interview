// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD0KnvYRunoEmKBaGwgEjbRPh3_GWZwx6g",
  authDomain: "interviewprep-21888.firebaseapp.com",
  projectId: "interviewprep-21888",
  storageBucket: "interviewprep-21888.firebasestorage.app",
  messagingSenderId: "639899655624",
  appId: "1:639899655624:web:d316bfd744e3acf37734fd",
  measurementId: "G-8ND6HMQS5J"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);