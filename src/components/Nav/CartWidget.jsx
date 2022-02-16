import './NavBar.css';
import { Link } from 'react-router-dom';
import React, {useContext} from 'react';
import {CartContext} from '../../context/CartContext';


const CartWidget = () => {

  const cartContext = useContext(CartContext);

  const { carrito } = cartContext;


  return (
  <>
    <Link to='/carrito' className="bi bi-cart"></Link>
    <div className='contador text-light'>{carrito.length}</div>
  </>);
  };

export default CartWidget;
