import { useContext, useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../services/firebaseconfig";
import { CartContext } from "./context/CartContext";

const CheckoutForm = () => {
    const [orderId, setOrderId] = useState("");
    const { carrito, totalCompra, vaciarCarrito } = useContext(CartContext);
    const [form, setForm] = useState({ nombre: "", email: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const orden = {
            comprador: form,
            items: carrito,
            total: totalCompra(),
            fecha: new Date(),
        };

        const ordersRef = collection(db, "ordenes");
        addDoc(ordersRef, orden).then((doc) => {
            setOrderId(doc.id);
            vaciarCarrito();
        });
    };

    if (orderId) {
        return <h2>¡Gracias por tu compra! Tu número de orden es: {orderId}</h2>;
    }

    return (
        <form onSubmit={handleSubmit} className="checkout-form">
            <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                value={form.nombre}
                onChange={handleChange}
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                required
            />
            <button type="submit">Comprar</button>
        </form>
    );
};

export default CheckoutForm;

