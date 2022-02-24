// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAlBN8P-Z6D3ir33Ld0R973LHFu9olAuIU",
  authDomain: "react-8bits.firebaseapp.com",
  projectId: "react-8bits",
  storageBucket: "react-8bits.appspot.com",
  messagingSenderId: "795263811515",
  appId: "1:795263811515:web:dd12af4bbb37558e2c8e9e",
  measurementId: "G-15E8VEDNDN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);