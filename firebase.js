// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps} from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAFRq_Wz7g4k42wTGEUZlbFq2ZuePj4WcY",
  authDomain: "insta-2-de278.firebaseapp.com",
  projectId: "insta-2-de278",
  storageBucket: "insta-2-de278.appspot.com",
  messagingSenderId: "626352074425",
  appId: "1:626352074425:web:461436b74709eccae8f568"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };