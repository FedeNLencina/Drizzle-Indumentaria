// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Conection to the Database
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCJ8H_SFZplOCqjlxnuzyJoef3KAxvRs6E",
  authDomain: "drizzle-indumentaria.firebaseapp.com",
  projectId: "drizzle-indumentaria",
  storageBucket: "drizzle-indumentaria.appspot.com",
  messagingSenderId: "1014394209696",
  appId: "1:1014394209696:web:82ba6ffdb816b8a86f10c5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Conect with db.
export const db = getFirestore(app);