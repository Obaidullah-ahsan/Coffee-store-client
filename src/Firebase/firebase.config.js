// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQUj16hWCY-MbXtATs_7VKiAV5QcJKApE",
  authDomain: "coffee-store-9cdfa.firebaseapp.com",
  projectId: "coffee-store-9cdfa",
  storageBucket: "coffee-store-9cdfa.appspot.com",
  messagingSenderId: "1095135375588",
  appId: "1:1095135375588:web:860485a7fbedd41c27bcf1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;