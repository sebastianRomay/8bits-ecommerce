import React from "react";
import Spinner from "../Spinner/Spinner";
import BotonAgregar from "../AgregarCarrito/BotonAgregar";
import "./ItemDetail.css";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";

const ItemDetail = ({ producto }) => {
  const comprar = () => {
    alert("Gracias por tu compra :)");
  };

  return (
    <>
      {!producto ? (
        <Spinner/>
      ) : (
        <div className="container detalle mb-5 mt-5">
          <div className="row mt-3">
            <div className="col-md-4 col-12 d-flex justify-content-center">
              <img src={producto.image} alt="" className="w-100" />
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
                    <span className="text-dark h4">USD</span> {producto.price}
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
                  <ItemCount/>
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
