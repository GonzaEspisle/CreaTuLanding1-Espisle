import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
    const { totalUnidades } = useContext(CartContext);
    return (
        <Link to="/carrito" className="cart-widget">
            🛒 ({totalUnidades()})
        </Link>
    );
};

export default CartWidget;
