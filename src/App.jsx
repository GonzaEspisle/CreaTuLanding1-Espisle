import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import './App.css';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<ItemListContainer greeting='¡Bienvenido a nuestra tienda!' />} />
        <Route path='/category/:id' element={<ItemListContainer greeting='Categoría seleccionada' />} />
        <Route path='/item/:id' element={<ItemDetailContainer />} />
        <Route path='*' element={<h2>Página no encontrada (404)</h2>} />
      </Routes>
    </Router>
  );
}

export default App;