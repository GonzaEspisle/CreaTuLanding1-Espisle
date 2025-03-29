function ItemListContainer({ greeting, category }) {
    const items = [
        { id: 1, name: 'PlayStation 5', price: 499, stock: 5, category: 'electronica', image: 'PS5.jpg' },
        { id: 2, name: 'Smart TV Samsung 50"', price: 399, stock: 8, category: 'electronica', image: 'tv-samsung.jpg' },
        { id: 3, name: 'Auriculares Sony WH-1000XM4', price: 299, stock: 12, category: 'electronica', image: 'sony-headphones.jpg' },
        { id: 4, name: 'Teclado Mecánico Redragon', price: 70, stock: 10, category: 'electronica', image: 'redragon-keyboard.jpg' },
        { id: 5, name: 'Mouse Logitech G502', price: 50, stock: 15, category: 'electronica', image: 'logitech-mouse.jpg' }
    ];

    const filteredItems = category ? items.filter(item => item.category === category) : items;

    return (
        <main style={{ padding: '20px', textAlign: 'center' }}>
            <h1 style={{ color: 'green' }}>{greeting}</h1>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
                {filteredItems.map(item => (
                    <div key={item.id} style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', textAlign: 'center', width: '220px', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <h3>{item.name}</h3>
                        <p>Precio: ${item.price}</p>
                        <p>Quedan {item.stock} disponibles</p>
                        <img src={`../images/${item.image}`} alt={item.name} style={{ height: '120px', marginBottom: '10px', borderRadius: '4px' }} />
                        <button style={{ margin: '5px', padding: '8px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '4px' }}>Agregar al carrito</button>
                        <button style={{ margin: '5px', padding: '8px', backgroundColor: '#ddd', color: 'black', border: 'none', borderRadius: '4px' }}>Ver detalle</button>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default ItemListContainer;

