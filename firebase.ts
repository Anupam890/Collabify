
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDZNCot7PPgUQxV5uO_3knfw6Cjyn3o4g8",
  authDomain: "collabify-607b7.firebaseapp.com",
  projectId: "collabify-607b7",
  storageBucket: "collabify-607b7.firebasestorage.app",
  messagingSenderId: "1067659892152",
  appId: "1:1067659892152:web:d171d563b8e2abd31fab4d"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore(app);
export {db};