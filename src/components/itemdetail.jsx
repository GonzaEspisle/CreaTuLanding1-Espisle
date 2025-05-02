import React from 'react';
import ItemCount from './itemcount';

const ItemDetail = ({ item }) => {
    return (
        <div>
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} />
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            <ItemCount stock={item.stock} initial={1} />
        </div>
    );
}

export default ItemDetail;
