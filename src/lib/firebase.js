import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "reactchat-55bfe.firebaseapp.com",
  projectId: "reactchat-55bfe",
  storageBucket: "reactchat-55bfe.appspot.com",
  messagingSenderId: "249390627862",
  appId: "1:249390627862:web:aede371d882fa0272a4937"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth()
export const db=getFirestore()
export const storage=getStorage()