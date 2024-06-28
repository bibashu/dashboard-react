// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8OiTF8Bf5tyfpxKJ7rF4pCaEb7--AXyE",
  authDomain: "dash-85558.firebaseapp.com",
  projectId: "dash-85558",
  storageBucket: "dash-85558.appspot.com",
  messagingSenderId: "726297515575",
  appId: "1:726297515575:web:dda840a4852ff288f111b2"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app)
 export {auth}