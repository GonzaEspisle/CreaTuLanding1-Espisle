import { useContext } from "react";
import { CartContext } from "./context/cartcontext";
import { Link } from "react-router-dom";
import './Cart.css';

const Cart = () => {
    const { carrito, vaciarCarrito, totalCompra } = useContext(CartContext);

    if (carrito.length === 0) {
        return (
            <div className="cart">
                <h2>Carrito vacío 🛒</h2>
                <Link to="/">Volver al catálogo</Link>
            </div>
        );
    }

    return (
        <div className="cart">
            <h2>Tu carrito</h2>
            {carrito.map((item) => (
                <div className="cart-item" key={item.id}>
                    <h4>{item.nombre}</h4>
                    <p>Cantidad: {item.cantidad}</p>
                    <p>Subtotal: ${item.precio * item.cantidad}</p>
                </div>
            ))}
            <div className="cart-total">Total: ${totalCompra()}</div>
            <div className="cart-buttons">
                <button onClick={vaciarCarrito}>Vaciar carrito</button>
                <Link to="/checkout">Finalizar compra</Link>
            </div>
        </div>
    );
};

export default Cart;