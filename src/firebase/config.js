// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqSMkLKoylAJK28iIHW3ZNGApEjj1-UWw",
  authDomain: "e-commerce-bruno.firebaseapp.com",
  projectId: "e-commerce-bruno",
  storageBucket: "e-commerce-bruno.appspot.com",
  messagingSenderId: "464354766815",
  appId: "1:464354766815:web:e2b633ff7152afc62e9e6a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)