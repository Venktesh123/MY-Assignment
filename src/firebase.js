// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC_mGCrMnYI_yqLB_iXu5BVkEPYiIHTUjI",
  authDomain: "shoppinglist-895b4.firebaseapp.com",
  projectId: "shoppinglist-895b4",
  storageBucket: "shoppinglist-895b4.appspot.com",
  messagingSenderId: "849104576221",
  appId: "1:849104576221:web:4aa1ea23de3041fbc34534",
  measurementId: "G-P0LKT8KT1J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();

export {app,auth};