// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB4L9fyET513WOEsILbRsuPug8zLPqvdcc",
  authDomain: "pipiwool-cd718.firebaseapp.com",
  projectId: "pipiwool-cd718",
  storageBucket: "pipiwool-cd718.appspot.com",
  messagingSenderId: "455739940561",
  appId: "1:455739940561:web:1d81fd1a0e8f513a376ff0",
  measurementId: "G-BM82GXHLW5",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
