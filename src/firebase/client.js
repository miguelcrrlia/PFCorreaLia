// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNBwpMw8_7xL70e7CDmFWkAsxu9SRCJMQ",
  authDomain: "e-commerce-cabv.firebaseapp.com",
  projectId: "e-commerce-cabv",
  storageBucket: "e-commerce-cabv.appspot.com",
  messagingSenderId: "1097430149040",
  appId: "1:1097430149040:web:1917232d3d8bcb55805875"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)