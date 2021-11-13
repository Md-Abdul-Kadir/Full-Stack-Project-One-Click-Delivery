
import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

// Initialize Firebase
const InitializeAuthentication = () => {
   initializeApp(firebaseConfig);
}

export default InitializeAuthentication;