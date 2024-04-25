// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtonc5xcNLniCDQRMK2YXPHBnjtguE5FY",
  authDomain: "fir-practice-f52df.firebaseapp.com",
  projectId: "fir-practice-f52df",
  storageBucket: "fir-practice-f52df.appspot.com",
  messagingSenderId: "170795154788",
  appId: "1:170795154788:web:50642ffdc6b2512d9b0e71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore();