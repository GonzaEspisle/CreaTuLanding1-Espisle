import ItemCount from "./ItemCount";
import { useContext, useState } from "react";
import { CartContext } from "./context/cartcontext";
import '../components/itemdetail.css';

const ItemDetail = ({ producto }) => {
    const [agregado, setAgregado] = useState(false);
    const { agregarAlCarrito } = useContext(CartContext);

    const handleAgregar = (cantidad) => {
        const itemAgregado = {
            id: producto.id,
            nombre: producto.name,
            precio: producto.price,
            cantidad,
            imagen: producto.image,
        };
        agregarAlCarrito(itemAgregado);
        setAgregado(true);
    };

    return (
        <div className="item-detail">
            <img src={producto.image} alt={producto.name} />
            <h2>{producto.name}</h2>
            <p>{producto.description}</p>
            <p>Precio: ${producto.price}</p>
            {agregado ? (
                <p>Producto agregado ✅</p>
            ) : (
                <ItemCount stock={producto.stock} onAdd={handleAgregar} />
            )}
        </div>
    );
};

export default ItemDetail;
