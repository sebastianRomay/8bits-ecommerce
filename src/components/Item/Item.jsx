import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { NavLink } from "react-router-dom";
import swal from 'sweetalert';


const Items = ({ img, precio, title, id }) => {
  const onAdd = (dato) => {
    swal(
      `¡${dato} Producto/s agregado!`,
      'Sigue comprando en nuestra tienda',
      'success'
    )
  };

  return (
    <>
      <div className="card m-3">
        <NavLink to={`/item/${id}`} className="text-decoration-none text-dark">
          <img src={img} className="card-img-top" alt="..." />
          <div className="card-body d-flex justify-content-center flex-column">
            <h6 className="card-text text-center bg-dark text-light">
              USD {precio}
            </h6>
            <h6 className="card-title text-center">{title}</h6>
          </div>
        </NavLink>
        <ItemCount initial="0" stock="5" onAdd={onAdd} />
      </div>
    </>
  );
};

export default Items;
