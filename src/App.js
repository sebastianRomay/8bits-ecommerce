import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Importando Views
import Home from './views/Home/Home';
import DetalleProducto from './views/DetalleProducto/DetalleProducto';
import Carrito from './views/Carrito/Carrito';
import Compra from './views/Compra/Compra';
import CartProvider from './context/CartContext';



const App = () => {

  return (
    <>
    <CartProvider>
    <Router>
      {/* Rutas */}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/item/:idDetalle' element={<DetalleProducto/>} />
        <Route path='/carrito' element={<Carrito/> }/>
        <Route path='/compra' element={<Compra/> }/>
      </Routes>
    </Router>
    </CartProvider>
    </>
  )
}

export default App