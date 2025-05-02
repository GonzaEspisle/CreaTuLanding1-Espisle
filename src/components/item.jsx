import { Link } from 'react-router-dom';

const Item = ({ id, title, image, price }) => {
    return (
        <div className="producto">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p className="precio">${price}</p>
            <Link to={`/item/${id}`} className="boton-detalle">Ver Detalles</Link>
            <button className="boton-carrito">Añadir al Carrito</button>
        </div>
    );
};

export default Item;

