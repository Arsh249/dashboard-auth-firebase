import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyANzLPw4qL2dfeWmWlMsgjt8maovtsQ-Ak",
  authDomain: "relu-e9e89.firebaseapp.com",
  projectId: "relu-e9e89",
  storageBucket: "relu-e9e89.appspot.com",
  messagingSenderId: "436409044330",
  appId: "1:436409044330:web:3c9be17c194bd385256913",
  measurementId: "G-Y83RYYC16Q"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore(app);
export default app;