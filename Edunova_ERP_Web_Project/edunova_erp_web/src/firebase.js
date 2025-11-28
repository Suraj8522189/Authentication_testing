



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
 export const firebaseConfig = {
  apiKey: "AIzaSyArA2Q1jmpCENeT6c9V3vZqOC7BZ2NSLGs",
  authDomain: "fir-a0261.firebaseapp.com",
  databaseURL: "https://fir-a0261-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-a0261",
  storageBucket: "fir-a0261.firebasestorage.app",
  messagingSenderId: "337118095874",
  appId: "1:337118095874:web:549c25a0e23fdaa63a551b",
  measurementId: "G-XV9C9RPX0B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth=getAuth(app)
const analytics = getAnalytics(app);
export const db =getFirestore(app)
