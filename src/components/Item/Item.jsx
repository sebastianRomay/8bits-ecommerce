import React from "react";
import { NavLink } from "react-router-dom";
import BotonAgregar from "../AgregarCarrito/BotonAgregar";


const Items = ({ item }) => {

  return (
    <>
      <div className="card m-3">
        
          <img src={item.image} className="card-img-top" alt="..." />
          <div className="card-body d-flex justify-content-center flex-column">
            <h6 className="card-text text-center bg-dark text-light">
              $ {item.price}
            </h6>
            <h6 className="card-title text-center">{item.title}</h6>
          </div>
          <NavLink to={`/item/${item.id}`} className="text-decoration-none text-dark">
            <BotonAgregar texto='Comprar'/>
        </NavLink>
      </div>
    </>
  );
};

export default Items;
