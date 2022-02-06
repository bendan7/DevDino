// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRT9OUHgMwICFj6h3Dzm9jrShuPweEwV8",
  authDomain: "dinodev-75a75.firebaseapp.com",
  projectId: "dinodev-75a75",
  storageBucket: "dinodev-75a75.appspot.com",
  messagingSenderId: "848344230516",
  appId: "1:848344230516:web:c574c827ed63c9fc71ff21",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const firestore = getFirestore();
