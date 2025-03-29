
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src='' alt='Logo' style={{ height: '40px', marginRight: '10px' }} />
                <h1 style={{ margin: 0 }}>Tienda Brightway</h1>
            </div>
            <div>
                <Link to='/'>Inicio</Link>
                <Link to='/category/electronica'>Electrónica</Link>
                <Link to='/category/ropa'>Ropa</Link>
                <Link to='/category/hogar'>Hogar</Link>
            </div>
        </nav>
    );
}

export default NavBar;
