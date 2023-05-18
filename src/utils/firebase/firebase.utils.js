import { initializeApp } from "firebase/app";
import { getAuth, signOut, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getDoc, setDoc, doc, getFirestore, collection, writeBatch, query, getDocs } from "firebase/firestore";
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
initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();


provider.getCustomParameters({ prompt: "select_account" });

export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const AddCollectionAndDocuments = async (collectionKey, objectToAdd) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectToAdd.forEach(object => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log("data transfered to firstore");

};

export const getCollectionAndDocuments = async () => {
  const collectionRef = collection(db, "categories");
  const q = query(collectionRef);
  const querySnapShot = await getDocs(q);

  const categoryMap = querySnapShot.docs.reduce((acc, docSnapShot) => {
    const { title, items } = docSnapShot.data();
    acc[title.toLowerCase()] = items;
    return acc;
  }, {});
  return categoryMap;
};

export const createUserDocFromAuth = async (userAuth, addictionalInfo) => {
  if (!userAuth) return;
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
        ...addictionalInfo
      });
    } catch (error) {
      console.log("error creating the user,", error.message);
    }
  }
};

export const createUserAuthWithEmailPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password,);

};
export const signInUserAuthWithEmailPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const onAuthStateChangedListner = (callback) => onAuthStateChanged(auth, callback);

export const signOutCurrentUser = async () => {
  await signOut(auth);
};

