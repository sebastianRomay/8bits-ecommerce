import './NavBar.css';
import { Link } from 'react-router-dom';
import React, {useContext} from 'react';
import {CartContext} from '../../context/CartContext';


const CartWidget = () => {

  const cartContext = useContext(CartContext);

  const { carrito } = cartContext;


  return (
  <>
  <div className='d-flex justify-content-center gap-1'>

    <Link to='/carrito' className="bi bi-cart"></Link>
    <div className='contador text-light d-flex align-items-center'>{carrito.length}</div>
  </div>
  </>);
  };

export default CartWidget;
