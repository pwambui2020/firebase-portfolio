// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDoBJYUgSLLzwqhrG3zw5ApyMHbTw1wMo",
  authDomain: "portfolio-moringa.firebaseapp.com",
  projectId: "portfolio-moringa",
  storageBucket: "portfolio-moringa.firebasestorage.app",
  messagingSenderId: "883678782238",
  appId: "1:883678782238:web:db01553ad7fedaf10b9f0f",
  measurementId: "G-BXKEYHB93E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);

export {auth,firestore};