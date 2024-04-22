// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCs20ONjYoJRs2649etLMrSgtfj8Mb2tjE",
  authDomain: "oms-pos.firebaseapp.com",
  projectId: "oms-pos",
  storageBucket: "oms-pos.appspot.com",
  messagingSenderId: "174957416342",
  appId: "1:174957416342:web:26f6f21941ddd686e097b7",
  measurementId: "G-P9YH52Y4CC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);