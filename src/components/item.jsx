import React from 'react';
import '../item.css';

const Item = ({ item }) => {
    return (
        <div className="item">
            <img src={item.image} alt={item.title} />
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <p>Precio: ${item.price}</p>
            <button>Ver Detalle</button>
        </div>
    );
};

export default Item;




