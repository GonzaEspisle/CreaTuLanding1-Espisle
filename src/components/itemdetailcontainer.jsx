import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../services/firebaseconfig";
import ItemDetail from "../components/ItemDetail";

const ItemDetailContainer = () => {
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const docRef = doc(db, "productos", id);
        getDoc(docRef)
            .then((resp) => {
                setProducto({ id: resp.id, ...resp.data() });
            })
            .finally(() => setLoading(false));
    }, [id]);

    return (
        <div className="item-detail-container">
            {loading ? <h2>Cargando...</h2> : <ItemDetail producto={producto} />}
        </div>
    );
};

export default ItemDetailContainer;
