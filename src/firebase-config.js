import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAs67PX9-3UkMY43iE0o5KeTx1YBvRtsjA",
  authDomain: "proiect-front-end-avansat.firebaseapp.com",
  projectId: "proiect-front-end-avansat",
  storageBucket: "proiect-front-end-avansat.appspot.com",
  messagingSenderId: "573483421371",
  appId: "1:573483421371:web:104783c464ae19b064639e",
  measurementId: "G-ZJ2R11SLQZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export default app;
export { auth, db };
