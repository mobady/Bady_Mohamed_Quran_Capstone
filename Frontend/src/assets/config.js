// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth"
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp-AHhhgNKRAi8PMWo1Ryt-dgamooG6QY",
  authDomain: "aut-quran.firebaseapp.com",
  projectId: "aut-quran",
  storageBucket: "aut-quran.appspot.com",
  messagingSenderId: "666396178979",
  appId: "1:666396178979:web:1e04c28d3a552ad3f1cf96",
  measurementId: "G-HX93L80GMH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app)

export {auth}