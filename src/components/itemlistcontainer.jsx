import { useEffect, useState } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../services/firebaseconfig';
import ItemList from './itemlist';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const itemsCollection = collection(db, 'productos');
        const q = query(itemsCollection, where('category', '==', 'Electrónica'));
        getDocs(q).then((snapshot) => {
            const itemsList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            console.log(itemsList); // Verifica los datos obtenidos
            setItems(itemsList);
        });
    }, []);

    return <ItemList items={items} />;
}

export default ItemListContainer;








