import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDEuzs7rofD8v6z7WEHmTE1cLQucmlULsc",
  authDomain: "isranacomputers.firebaseapp.com",
  projectId: "isranacomputers",
  storageBucket: "isranacomputers.appspot.com",
  messagingSenderId: "31243736372",
  appId: "1:31243736372:web:2a0d2898a9ece161ff0161",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();

provider.getCustomParameters({ prompt: "select_account" });

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
