import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { Link, NavLink } from "react-router-dom";
import ItemCarrito from '../ItemCarrito/ItemCarrito';
import Spinner from '../Spinner/Spinner';

const Cart = () => {

  const cartContext = useContext(CartContext);
  const { carrito, eliminarDeCarrito, vaciarCarrito, total} = cartContext;

  return (
    <>
      <div className="container">
        {carrito ? (carrito.map(item => {
          return (
            <ItemCarrito key={item.id}
              item={item}
              eliminarPorId={eliminarDeCarrito}
            />
          );
        }))
          : <Spinner />}
        {carrito.length ? (<>
          <p className="h5 text-center mb-3">Precio total: ${total}</p>
        <div className='d-flex justify-content-center gap-3 mb-5'>
          
          <button
            className="btn btn-outline-danger"
            onClick={vaciarCarrito}
          >Vaciar Carrito
          </button>
          <NavLink to='/compra'>
            <button className='btn btn-outline-success' >Terminar Compra</button>
          </NavLink>
          <NavLink to='/'>
            <button className='btn btn-outline-dark'>Seguir Comprando</button>
          </NavLink>
          </div>
          </>)

          :
          <div className='container'>
            <div className="row">
              <div className="col-md-6 mt-4 col-12">
                <h3>Mi carrito:</h3>
            </div>
            <div className="row">
              <div className="col-md-6 mt-2 col-12">
                <h5>Su carrito esta vacio.</h5>
                <p className="h6">
                  Para seguir comprando pulse el siguiente boton:
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 mt-2">
                <Link to="/">
                  <button className="btn btn-outline-dark">Seguir comprando</button>
                </Link>
              </div>
            </div>
          </div>
          </div>
        }

      </div>
    </>
  );
};
export default Cart;