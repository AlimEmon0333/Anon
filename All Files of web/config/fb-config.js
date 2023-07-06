// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
// import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8bmV-VVITG7jMD_4gJy6gnk8Z1r-cSVQ",
  authDomain: "anon-garments.firebaseapp.com",
  projectId: "anon-garments",
  storageBucket: "anon-garments.appspot.com",
  messagingSenderId: "503561279280",
  appId: "1:503561279280:web:8f5930574570038239daf5",

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = initializeApp(getAnalytics);
const database = initializeApp(getDatabase);
const auth = initializeApp(getAuth);

export {
  database,
  ref,
  set,
  push,
  onValue,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
