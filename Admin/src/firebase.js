// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "edusphere-f81cf.firebaseapp.com",
  projectId: "edusphere-f81cf",
  storageBucket: "edusphere-f81cf.appspot.com",
  messagingSenderId: "890267394",
  appId: "1:890267394:web:ace529ea2dbe545648841b",
  measurementId: "G-VYC6DZPPZY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);