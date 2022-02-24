import React, { useState, useContext } from "react";
import Spinner from "../Spinner/Spinner";
import "./ItemDetail.css";
import { NavLink } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import swal from "sweetalert";
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({ producto }) => {

  
  const [cantidad, setCantidad] = useState(null)

  const cartContext = useContext(CartContext);

  const { addItem } = cartContext;

  const onAdd = (cant) => {
    setCantidad(cant)
    addItem(producto, cant)
    swal('Producto añadido con exito', 'Finaliza tu compra clickeando el boton', 'success')
  };

  return (
    <>
      {!producto ? (
        <Spinner />
      ) : (
        <div className="container detalle mb-5 mt-5">
          <div className="row mt-3">
            <div className="col-md-6 col-12 d-flex justify-content-center mb-3">
              <img src={producto.image} alt="Imagen de producto" className="w-100 altura" />
            </div>

            <div className="container col-md-6 col-12">
              <div className="row">
                <div className="col-12">
                  <h2 className="text-dark">{producto.title}</h2>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <h2 className="text-dark">
                    <span className="text-dark h4">$</span> {producto.price}
                    <span className="text-success h6">62%OFF</span>
                  </h2>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col-12">
                  <p className="h6">{producto.description}</p>
                </div>
              </div>
              <div className="row mt-3">
                <div className="col4">
                  <p className="bi bi-truck text-success h6"> Envio Gratis</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6">
                  {!cantidad ? (

                    <ItemCount initial={0} stock={producto.stock} onAdd={onAdd} />
                  ) : (<>
                    <NavLink to='/carrito' >
                    <button className='btn btn-outline-dark mb-2 mx-1'>Terminar Compra</button>
                    </NavLink>
                    <NavLink to='/'>
                      <button className='btn btn-outline-success mb-2' >Seguir Comprando</button>
                    </NavLink>
                  </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
