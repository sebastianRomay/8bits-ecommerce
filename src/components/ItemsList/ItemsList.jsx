import React,  {useEffect, useState} from "react";
import Item from "../Item/Item";
import Spinner from "../Spinner/Spinner";
import {obtenerTodosLosProductos} from '../../helpers/obtenerDatos';


const ItemsList = () => {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    obtenerTodosLosProductos(setProductos);
  }, []);

  return (
    <>
      {!productos ? (
        <Spinner />
      ) : (
        productos.map((item) => {
          return (
            <Item item={item} key={item.id} />
          );
        })
      )}
    </>
  );
};

export default ItemsList;
