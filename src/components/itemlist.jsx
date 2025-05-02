import React from 'react';
import Item from './Item';
import '../itemlist.css'; // Importa el archivo CSS para estilos

const ItemList = ({ items }) => {
    return (
        <div className="item-list">
            {items.map(item => (
                <Item key={item.id} item={item} />
            ))}
        </div>
    );
}

export default ItemList;
