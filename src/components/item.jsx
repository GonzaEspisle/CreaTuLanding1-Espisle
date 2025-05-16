import { Link } from "react-router-dom";

const Item = ({ producto }) => {
    return (
        <div className="item-card">
            <img src={producto.image} alt={producto.name} width={150}/>
            <h3>{producto.name}</h3>
            <p>${producto.price}</p>
            <Link to={`/item/${producto.id}`}>Ver más</Link>
        </div>
    );
};

export default Item;




