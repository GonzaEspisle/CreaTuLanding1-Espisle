import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBMv16iYoK98qZy077WtiA_QcbPtDE_q3g",
    authDomain: "tienda-brightway.firebaseapp.com",
    projectId: "tienda-brightway",
    storageBucket: "tienda-brightway.firebasestorage.app",
    messagingSenderId: "191732010619",
    appId: "1:191732010619:web:d9e489e0bc15caa43bdcde"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

