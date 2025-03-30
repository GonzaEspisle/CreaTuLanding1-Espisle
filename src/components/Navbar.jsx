import { Link } from 'react-router-dom';
import '../index.css'; // Asegurar que los estilos estén bien vinculados

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="titulo-tienda">
                    <Link to="/">Tienda Brightway</Link>
                </h1>
                <ul className="nav-links">
                    <li><Link to="/category/electronica">Electrónica</Link></li>
                    <li><Link to="/category/hogar">Hogar</Link></li>
                    <li><Link to="/category/otros">Otros</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;
