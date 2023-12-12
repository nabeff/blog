// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-50778.firebaseapp.com",
  projectId: "blog-50778",
  storageBucket: "blog-50778.appspot.com",
  messagingSenderId: "369596514417",
  appId: "1:369596514417:web:9685e1cd38beb95fd8dbd0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
