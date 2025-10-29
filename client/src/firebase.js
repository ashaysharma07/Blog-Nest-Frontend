// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blognest-42846.firebaseapp.com",
  projectId: "blognest-42846",
  storageBucket: "blognest-42846.firebasestorage.app",
  messagingSenderId: "1077770129513",
  appId: "1:1077770129513:web:629dbed5a284537eee92f8",
  measurementId: "G-D9CPMRJ02Y"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
