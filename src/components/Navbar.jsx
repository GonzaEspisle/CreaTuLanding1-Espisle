import CartWidget from "./Cartwidget";

const NavBar = () => {
    return (
        <nav style={{ display: "flex", justifyContent: "space-between", padding: "10px", backgroundColor: "#f8f9fa" }}>
            <h1>Tienda Brightway</h1>
            <ul style={{ listStyle: "none", display: "flex", gap: "15px" }}>
                <li><a href="#">Inicio</a></li>
                <li><a href="#">Productos</a></li>
                <li><a href="#">Contacto</a></li>
            </ul>
            <CartWidget />
        </nav>
    );
};

export default NavBar;