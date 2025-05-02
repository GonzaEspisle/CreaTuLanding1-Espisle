// src/services/uploadProducts.js
import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseconfig";

const products = [
    {
        title: "Alfajor de Chocolate",
        description: "Relleno de dulce de leche y cobertura de chocolate semiamargo.",
        price: 800,
        stock: 20,
        category: "chocolate",
        image: "https://i.imgur.com/XJ4N2zP.jpg"
    },
    {
        title: "Alfajor de Lemon Pie",
        description: "Inspirado en el clásico postre, con relleno de limón.",
        price: 850,
        stock: 15,
        category: "frutales",
        image: "https://i.imgur.com/e9t7XZq.jpg"
    },
    {
        title: "Alfajor de Red Velvet",
        description: "Bizcocho rojo aterciopelado con relleno de vainilla.",
        price: 900,
        stock: 10,
        category: "especiales",
        image: "https://i.imgur.com/XwKb5Jk.jpg"
    }
];

export const uploadProducts = async () => {
    const productosRef = collection(db, "products");
    for (let item of products) {
        await addDoc(productosRef, item);
    }
    console.log("Productos cargados correctamente.");
};
