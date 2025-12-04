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
  apiKey: "AIzaSyCLOYd5OkvtiJ0tk0K4BsNw8-28W4SklIM",
  authDomain: "testing-auth-2e3c0.firebaseapp.com",
  projectId: "testing-auth-2e3c0",
  storageBucket: "testing-auth-2e3c0.firebasestorage.app",
  messagingSenderId: "190539547540",
  appId: "1:190539547540:web:3a37f2226d73bdea8b8581",
  measurementId: "G-BM1LH33XF4"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)
export const db =getFirestore(app)

