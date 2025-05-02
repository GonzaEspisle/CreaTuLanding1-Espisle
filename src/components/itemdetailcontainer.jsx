import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFirestore, doc, getDoc } from 'firebase/firestore';
import ItemDetail from '../components/itemdetail';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const db = getFirestore();
        const itemRef = doc(db, "items", id);
        getDoc(itemRef).then((snapshot) => {
            if (snapshot.exists()) {
                setItem({ id: snapshot.id, ...snapshot.data() });
            }
        });
    }, [id]);

    return item ? <ItemDetail item={item} /> : <p>Cargando...</p>;
}

export default ItemDetailContainer;


