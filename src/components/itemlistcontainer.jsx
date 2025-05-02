// src/components/ItemListContainer.jsx
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebaseconfig';
import ItemList from './itemlist';

const ItemListContainer = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const itemsCollection = collection(db, 'items');
        getDocs(itemsCollection).then((snapshot) => {
            const itemsList = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
            setItems(itemsList);
        });
    }, []);

    return <ItemList items={items} />;
}

export default ItemListContainer;





