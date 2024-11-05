// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider ,signOut} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAhY0muU1U0s-nLtdDQ0OlRCJcOHUPQsc",
  authDomain: "login-c5b1d.firebaseapp.com",
  projectId: "login-c5b1d",
  storageBucket: "login-c5b1d.appspot.com",
  messagingSenderId: "325332804996",
  appId: "1:325332804996:web:1774ffd6fb84bca965e9d1",
  measurementId: "G-J0PY1JG21C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();  // Use GoogleAuthProvider, not googleProvider
