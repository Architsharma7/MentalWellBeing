// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxQfzMsANC6iNxnvsrcIUJfDAcpOlZYXQ",
  authDomain: "mentalwellbeing-7.firebaseapp.com",
  projectId: "mentalwellbeing-7",
  storageBucket: "mentalwellbeing-7.appspot.com",
  messagingSenderId: "1021121220178",
  appId: "1:1021121220178:web:9afcc6a2bde40f3e06198b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();