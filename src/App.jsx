import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/Navbar.jsx';
import ItemListContainer from './components/itemlistcontainer';
import ItemDetailContainer from './components/itemdetailcontainer';
import Cart from './components/cart.jsx';
import Checkout from "./components/Checkout.jsx";
import './styles.css';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;



