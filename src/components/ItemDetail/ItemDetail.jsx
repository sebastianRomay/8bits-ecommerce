import React, { useState } from "react";
import Spinner from "../Spinner/Spinner";
import BotonAgregar from "../AgregarCarrito/BotonAgregar";
import "./ItemDetail.css";
import { NavLink } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import swal from "sweetalert";

const ItemDetail = ({ producto }) => {
  const [cantidad, setCantidad] = useState(null)

  // const cartContext = useContext(CartContext);

  const onAdd = (cuantos) => {
    setCantidad(cuantos)
    swal('Producto añadido con exito', 'Finaliza tu compra clickeando el boton', 'success')
  };

  return (
    <>
      {!producto ? (
        <Spinner/>
      ) : (
        <div className="container detalle mb-5 mt-5">
          <div className="row mt-3">
            <div className="col-md-6 col-12 d-flex justify-content-center mb-3">
              <img src={producto.image} alt="" className="w-100 altura" />
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
                  
                  <ItemCount initial={0} stock={10} onAdd={onAdd}/>
                      ) : (
                        <NavLink to='/carrito'>
                          <BotonAgregar texto='Terminar Compra'/>
                        </NavLink>
                      ) }
                </div>
              </div>
              {/* <div className="row mt-3">
                <div className="col-md-6 col-12">
                <Link to="/compra">
                  <BotonAgregar texto='Comprar'/>
                </Link>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ItemDetail;
