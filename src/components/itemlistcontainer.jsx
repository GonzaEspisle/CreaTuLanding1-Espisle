import { useEffect, useState } from "react";
import ItemList from "./Itemlist";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../services/firebaseconfig";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const productosRef = collection(db, "productos");

        getDocs(productosRef)
            .then((resp) => {
                const items = resp.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));
                setProductos(items);
            })
            .catch((error) => console.log(error))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className="item-list-container">
            {loading ? <h2>Cargando productos...</h2> : <ItemList productos={productos} />}
        </div>
    );
};

export default ItemListContainer;








