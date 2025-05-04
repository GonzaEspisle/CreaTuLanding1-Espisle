import { useState, useContext } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebaseconfig";
import { CartContext } from "./context/CartContext";

const Checkout = () => {
    const { carrito, totalCarrito, vaciarCarrito } = useContext(CartContext);
    const [orderId, setOrderId] = useState(null);
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: ""
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const orden = {
            comprador: formData,
            items: carrito,
            total: totalCarrito()
        };

        const ordenesRef = collection(db, "ordenes");

        addDoc(ordenesRef, orden)
            .then((doc) => {
                setOrderId(doc.id);
                vaciarCarrito();
            });
    };

    if (orderId) {
        return <h2>¡Gracias por tu compra! Tu código de orden es: <strong>{orderId}</strong></h2>;
    }

    return (
        <div>
            <h2>Finalizar compra</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    onChange={handleChange}
                    required
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    required
                />
                <input
                    type="tel"
                    name="telefono"
                    placeholder="Teléfono"
                    onChange={handleChange}
                    required
                />
                <button type="submit">Comprar</button>
            </form>
        </div>
    );
};

export default Checkout;
