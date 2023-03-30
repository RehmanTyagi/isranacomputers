import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getDoc, setDoc, doc, getFirestore } from "firebase/firestore";
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

export const db = getFirestore();

export const createUserDocFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const { displayName, email } = userAuth;
  const creationDate = new Date();

  const userSnapShot = await getDoc(userDocRef);

  // if user does not exist then run this code
  if (!userSnapShot.exists()) {
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        creationDate,
      });
    } catch (error) {
      console.log("error creating the user,", error.message);
    }
  }
};
