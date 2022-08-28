import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./firebaseConfig";

// Your web app's Firebase configuration

// Initialize Firebase
const app = initializeApp(firebaseConfig); // connects our app to firebase back-end using firebaseConfig obj
// const db = getFirestore();

export default getFirestore();
