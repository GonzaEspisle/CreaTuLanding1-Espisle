import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebaseconfig";
import ItemList from "./ItemList";
import Item from "./Item";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const productosRef = collection(db, "products");

        getDocs(productosRef)
            .then((res) => {
                const productosFirestore = res.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setProductos(productosFirestore);
            })
            .catch((error) => console.error("Error al traer los productos:", error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div>
            <h2>Catálogo</h2>
            {loading ? <p>Cargando productos...</p> : <ItemList items={productos} />}
        </div>
    );
};

export default ItemListContainer;

