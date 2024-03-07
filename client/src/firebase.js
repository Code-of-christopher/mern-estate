// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-be67f.firebaseapp.com",
  projectId: "mern-estate-be67f",
  storageBucket: "mern-estate-be67f.appspot.com",
  messagingSenderId: "578377994106",
  appId: "1:578377994106:web:65d94eb103e4167d3ad0c3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
