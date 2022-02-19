import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import {obtenerProductoPorId} from '../../helpers/obtenerDatos';

const ItemDetailContainer = ({id}) => {
  const [producto, setProducto] = useState();
  useEffect(() => {
    obtenerProductoPorId(id, setProducto);
  }, []);
  return (
    <>
      <ItemDetail producto={producto} />
    </>
  );
};

export default ItemDetailContainer;
