// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSQirwc_CwPG5JV4RSfhofpQPgh7uNxJ0",
  authDomain: "sportglory-4178d.firebaseapp.com",
  projectId: "sportglory-4178d",
  storageBucket: "sportglory-4178d.firebasestorage.app",
  messagingSenderId: "323622763324",
  appId: "1:323622763324:web:937ef9e0184bc447ed7c39",
  measurementId: "G-VQQ4JF4B7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export services you need
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;