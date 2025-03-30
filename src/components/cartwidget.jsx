import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import cartIcon from "/images/cart.png"; // Asegúrate de tener la imagen en /public/images

const CartWidget = () => {
    const { cart } = useContext(CartContext);

    return (
        <div className="cart-widget">
            <Link to="/cart">
                <img src={cartIcon} alt="Carrito" className="cart-icon" />
                {cart.length > 0 && <span className="cart-count">{cart.length}</span>}
            </Link>
        </div>
    );
};

export default CartWidget;