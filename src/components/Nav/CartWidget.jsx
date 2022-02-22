import './NavBar.css';
import { Link } from 'react-router-dom';
import React, {useContext} from 'react';
import {CartContext} from '../../context/CartContext';


const CartWidget = () => {

  const cartContext = useContext(CartContext);

  const { cantidadTotal } = cartContext;
  
  return (
  <>
  <div className='d-flex justify-content-center gap-1'>

    <Link to='/carrito' className="bi bi-cart"></Link>
    {(cantidadTotal) ? <div className='contador text-light d-flex align-items-center'>{(cantidadTotal)}</div> : (null)}
    
  </div>
  </>);
  };

export default CartWidget;
