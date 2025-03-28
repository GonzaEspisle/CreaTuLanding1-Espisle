import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
    const { id } = useParams();
    return <h2>Detalle del producto ID: {id}</h2>;
}

export default ItemDetailContainer;