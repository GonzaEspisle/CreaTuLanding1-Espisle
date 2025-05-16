import { Link } from "react-router-dom";

const Item = ({ producto }) => {
    return (
        <div className="item-card">
            <img src={producto.image} alt={producto.name} style={{ width: 150 }} />
            <h3>{producto.name}</h3>
            <p>${producto.price}</p>
            <Link to={`/producto/${producto.id}`} className="btn-ver-mas">
            Ver más
            </Link>
        </div>
    );
};

export default Item;




