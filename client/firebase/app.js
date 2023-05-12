// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const { VITE_FIREBASE_API_KEY, VITE_APP_ID } = import.meta.env;

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: VITE_FIREBASE_API_KEY,
  authDomain: 'fineapple-ea261.firebaseapp.com',
  projectId: 'fineapple-ea261',
  storageBucket: 'fineapple-ea261.appspot.com',
  messagingSenderId: '240412251713',
  appId: VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
