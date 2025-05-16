import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
    <div className="logo">
        <Link to="/">Tienda BrightWay</Link>
    </div>
    <div className="categorias">
        <Link to="/category/electronica">Electrónica</Link>
        <Link to="/category/hogar">Hogar</Link>
        <Link to="/category/otros">Otros</Link>
        <Link to="/cart">🛒 Carrito</Link>
    </div>
</nav>
    );
};

export default NavBar;
