import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCb6O_I9l7gFE0tG87g_SwRUs90GNMB5y4",
  authDomain: "eirenesync.firebaseapp.com",
  projectId: "eirenesync",
  storageBucket: "eirenesync.appspot.com",
  messagingSenderId: "332981627254",
  appId: "1:332981627254:web:32e280b54bd245fda27257",
  measurementId: "G-FFTQXEE88Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get the default auth and Firestore instances
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };