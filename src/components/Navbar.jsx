import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <h1>Tienda Brightway</h1>
            <Link to='/'>Inicio</Link>
            <Link to='/category/electronica'>Electrónica</Link>
            <Link to='/category/ropa'>Ropa</Link>
            <Link to='/category/hogar'>Hogar</Link>
        </nav>
    );
}

export default NavBar;