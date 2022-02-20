import React, {useContext} from "react";
import ItemCount from "../ItemCount/ItemCount";
import { NavLink } from "react-router-dom";
import swal from 'sweetalert';
import { CartContext } from "../../context/CartContext";


const Items = ({ item }) => {

  const {addItem} = useContext(CartContext)

  const onAdd = (cantidad) => {
    addItem( item , cantidad )
    swal(
      `¡${cantidad} Producto/s agregado!`,
      'Sigue comprando en nuestra tienda',
      'success'
    )
  };

  return (
    <>
      <div className="card m-3">
        <NavLink to={`/item/${item.id}`} className="text-decoration-none text-dark">
          <img src={item.image} className="card-img-top" alt="..." />
          <div className="card-body d-flex justify-content-center flex-column">
            <h6 className="card-text text-center bg-dark text-light">
              $ {item.price}
            </h6>
            <h6 className="card-title text-center">{item.title}</h6>
          </div>
        </NavLink>
        <ItemCount initial="0" stock={item.stock} onAdd={onAdd} />
      </div>
    </>
  );
};

export default Items;
