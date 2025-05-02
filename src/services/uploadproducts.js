import { collection, addDoc } from "firebase/firestore";
import { db } from "./firebaseconfig";

const productos = [
    {
        title: "Playstation 5",
        description: "Consola de videojuegos",
        price: 499.99,
        stock: 10,
        category: "Electrónica",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7arANQH9Z8J4gM3Pz5kK2mYhRjAq5yFvXxg&usqp=CAU"
    }
];

export const uploadProductos = async () => {
    const productosRef = collection(db, "productos");
    for (let item of productos) {
        await addDoc(productosRef, item);
        console.log(`Producto cargado: ${item.title}`);
    }
    console.log("Productos cargados correctamente.");
};

