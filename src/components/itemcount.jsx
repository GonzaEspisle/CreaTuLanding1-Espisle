import React, { useState } from 'react';

const ItemCount = ({ stock, initial }) => {
    const [count, setCount] = useState(initial);

    const increment = () => {
        if (count < stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 1) {
            setCount(count - 1);
        }
    };

    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
            <button>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;
