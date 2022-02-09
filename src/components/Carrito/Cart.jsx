import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-4 col-12">
            <h3>Mi carrito</h3>
            <h6 className="text-danger">
              ¡No olvides definir el criterio de reemplazo!
            </h6>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4 d-flex align-items-center mt-3 col-12">
            <h6 className="text-center">Criterio de reemplazo:</h6>
            <select name="reemplazo" className="form-control w-50">
              <option value="Llamado">Llamado</option>
              <option value="No reemplazar">No reemplazar</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mt-5 col-12">
            <h5>Su carrito esta vacio.</h5>
            <p className="h6">
              Para seguir comprando pulse el siguiente boton:
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 ">
            <Link to="/">
              <button className="btn btn-outline-dark">Seguir comprando</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cart;