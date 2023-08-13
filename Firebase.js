// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlSU0urmLr-rN_FvRGoECeitMo2VzHCAM",
  authDomain: "netflix-77a06.firebaseapp.com",
  projectId: "netflix-77a06",
  storageBucket: "netflix-77a06.appspot.com",
  messagingSenderId: "977844306238",
  appId: "1:977844306238:web:6573a10674f054a06aec6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export {auth}