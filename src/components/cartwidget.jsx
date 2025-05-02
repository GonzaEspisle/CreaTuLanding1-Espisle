import { useContext } from 'react';
import { CartContext } from './CartContext';

function CartWidget() {
    const { cart } = useContext(CartContext);
    const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

    return (
        <div>
            <span>🛒</span>
            <span>{totalItems}</span>
        </div>
    );
}

export default CartWidget;
