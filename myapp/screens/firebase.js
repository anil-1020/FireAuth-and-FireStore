 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
 
const firebaseConfig = {
  apiKey: "AIzaSyD3vKw2OOrgYBg4dq4f-Xhj1bAhExnsz4k",
  authDomain: "too-do-2b2eb.firebaseapp.com",
  projectId: "too-do-2b2eb",
  storageBucket: "too-do-2b2eb.appspot.com",
  messagingSenderId: "538276933040",
  appId: "1:538276933040:web:f7feb9ed17a6f6c5effa75"
};
 
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export {auth,db};