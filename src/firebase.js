// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBMpULRQ11twj2EJK2asuk7xHG4k9-iecA",
	authDomain: "apple-store-react-project.firebaseapp.com",
	projectId: "apple-store-react-project",
	storageBucket: "apple-store-react-project.appspot.com",
	messagingSenderId: "751079196172",
	appId: "1:751079196172:web:c12375a39b7557723ad029",
	measurementId: "G-CES8YF0TRK",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default getFirestore;
