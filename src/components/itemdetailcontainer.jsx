import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    useEffect(() => {
        const fetchProducto = new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    id: 1,
                    title: "PlayStation 5",
                    image: "/images/ps5.jpg",
                    price: 499,
                    description: "La mejor consola de Sony con gráficos increíbles."
                });
            }, 1000);
        });

        fetchProducto.then((data) => {
            if (data.id === parseInt(id)) {
                setProducto(data);
            }
        });
    }, [id]);

    if (!producto) return <p>Cargando...</p>;

    return (
        <div className="detalle-producto">
            <img src={producto.image} alt={producto.title} />
            <h2>{producto.title}</h2>
            <p>{producto.description}</p>
            <p className="precio">${producto.price}</p>
            <button className="boton-carrito">Añadir al Carrito</button>
        </div>
    );
};

export default ItemDetailContainer;

