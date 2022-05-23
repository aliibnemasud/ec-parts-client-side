// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5jELaC-7d2kMJYPBEQ2RD0hEm-S1gGzg",
  authDomain: "ecparts-8e59b.firebaseapp.com",
  projectId: "ecparts-8e59b",
  storageBucket: "ecparts-8e59b.appspot.com",
  messagingSenderId: "570120720724",
  appId: "1:570120720724:web:3c0598a24608f206a438c1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;