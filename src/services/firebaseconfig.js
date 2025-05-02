import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBMv16iYoK98qZy07WTtiA_QcbPtDE_q3g",
    authDomain: "tienda-brightway.firebaseapp.com",
    projectId: "tienda-brightway",
    storageBucket: "tienda-brightway.appspot.com",
    messagingSenderId: "191732010619",
    appId: "1:191732010619:web:d9e489e0bc15caa43bdcde"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };

