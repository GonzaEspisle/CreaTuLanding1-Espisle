import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";

const ItemDetail = ({ producto }) => {
    const [agregado, setAgregado] = useState(false);
    const { agregarAlCarrito } = useContext(CartContext);

    const handleAgregar = (cantidad) => {
        const itemAgregado = { ...producto, cantidad };
        agregarAlCarrito(itemAgregado);
        setAgregado(true);
    };

    return (
        <div className="item-detail">
            <img src={producto.imagen} alt={producto.nombre} />
            <h2>{producto.nombre}</h2>
            <p>{producto.descripcion}</p>
            <p>Precio: ${producto.precio}</p>
            {agregado ? <p>Producto agregado ✅</p> : <ItemCount stock={producto.stock} onAdd={handleAgregar} />}
        </div>
    );
};

export default ItemDetail;
