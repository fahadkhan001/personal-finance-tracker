// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_FB,
  authDomain: "personal-finance-cad59.firebaseapp.com",
  projectId: "personal-finance-cad59",
  storageBucket: "personal-finance-cad59.appspot.com",
  messagingSenderId: "750017931521",
  appId: "1:750017931521:web:ffa106c1cff1c622e91300"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);