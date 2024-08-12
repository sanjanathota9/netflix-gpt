// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDedPMYx8uWsNuU_0UoePcVCH4rm3bxK5k",
  authDomain: "netflixgpt-e557f.firebaseapp.com",
  projectId: "netflixgpt-e557f",
  storageBucket: "netflixgpt-e557f.appspot.com",
  messagingSenderId: "584634704552",
  appId: "1:584634704552:web:d82d289f351c345a1b189d",
  measurementId: "G-NQ1M4LDV0E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
