import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebaseconfig";
import { useEffect, useState } from "react";
import ItemDetail from "./itemdetail";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const getProducto = async () => {
            try {
                const docRef = doc(db, "productos", id);
                const docSnap = await getDoc(docRef);
                if (docSnap.exists()) {
                    setProducto({ id: docSnap.id, ...docSnap.data() });
                } else {
                    console.error("No se encontró el producto.");
                }
            } catch (error) {
                console.error("Error al obtener el producto:", error);
            } finally {
                setLoading(false);
            }
        };

        getProducto();
    }, [id]);

    if (loading) return <p style={{ textAlign: "center" }}>Cargando...</p>;
    if (!producto) return <p style={{ textAlign: "center" }}>Producto no encontrado</p>;

    return <ItemDetail producto={producto} />;
};

export default ItemDetailContainer;
