import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [carrito, setCarrito] = useState([]);

    const agregarAlCarrito = (item) => {
        const existe = carrito.find((prod) => prod.id === item.id);
        if (existe) {
            setCarrito(
                carrito.map((prod) =>
                    prod.id === item.id ? { ...prod, cantidad: prod.cantidad + item.cantidad } : prod
                )
            );
        } else {
            setCarrito([...carrito, item]);
        }
    };

    const vaciarCarrito = () => setCarrito([]);

    const totalUnidades = () => carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
    const totalCompra = () => carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);

    return (
        <CartContext.Provider value={{ carrito, agregarAlCarrito, vaciarCarrito, totalUnidades, totalCompra }}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;