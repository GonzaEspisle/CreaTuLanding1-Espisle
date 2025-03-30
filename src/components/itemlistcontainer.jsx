import { useState, useEffect } from "react";
import Item from "./Item";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {
        // Simulación de una promesa con productos
        const fetchProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve([
                    { id: 1, title: "PlayStation 5", image: "/images/ps5.jpg", price: 499, category: "electronica" },
                    { id: 2, title: "Smart TV", image: "/images/tv.jpg", price: 299, category: "hogar" }
                ]);
            }, 1000);
        });

        fetchProductos.then((data) => {
            if (categoryId) {
                setProductos(data.filter(producto => producto.category === categoryId));
            } else {
                setProductos(data);
            }
        });
    }, [categoryId]);

    return (
        <div className="productos-container">
            {productos.map((producto) => (
                <Item key={producto.id} {...producto} />
            ))}
        </div>
    );
};

export default ItemListContainer;

