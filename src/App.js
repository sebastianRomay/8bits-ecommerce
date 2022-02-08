// Generales
import NavBar from './components/Nav/NavBar';
import Header from './components/Header/Header'
// Conenedor de cards
import ItemListContainer from './containers/ItemListContainer/ItemListContainer';
// Contenedor de los detalles de la card
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer';
// Agregando react router
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Importando Views
import Home from './views/Home/Home';
import Productos from './views/Productos/Productos';
import Carrito from './views/Carrito/Carrito';


const App = () => {

  return (
    <>
    <Router>
      {/* Rutas */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/productos' element={<Productos/>} />
        <Route path='/carrito' element={<Carrito/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App