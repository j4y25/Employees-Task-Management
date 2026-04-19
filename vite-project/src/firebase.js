import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyChRTydjN9LcdzQAWzdOGSH4TLGUoX_0WQ",
  authDomain: "employeestask-8b6d3.firebaseapp.com",
  projectId: "employeestask-8b6d3",
  storageBucket: "employeestask-8b6d3.firebasestorage.app",
  messagingSenderId: "361848763001",
  appId: "1:361848763001:web:7a4d3534f5d5531634daa8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();