import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
    apiKey: "AIzaSyAiSuclynWhTxLvoM3sA6HTl4AedQDvHqk",
    authDomain: "nihhongo-app.firebaseapp.com",
    projectId: "nihhongo-app",
    storageBucket: "nihhongo-app.appspot.com",
    messagingSenderId: "665410122756",
    appId: "1:665410122756:web:2ede5eff014f4a6b6cf151"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);