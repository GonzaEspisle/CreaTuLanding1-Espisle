import React from 'react';
import '../item.css'; // Ajusta la ruta para reflejar la ubicación correcta

const Item = ({ item }) => {
    return (
        <div className="item">
            <img src={item.imagen} alt={item.nombre} />
            <h2>{item.nombre}</h2>
            <p>{item.descripcion}</p>
            <p>Precio: ${item.precio}</p>
            <button>Ver Detalle</button>
        </div>
    );
}

export default Item;



