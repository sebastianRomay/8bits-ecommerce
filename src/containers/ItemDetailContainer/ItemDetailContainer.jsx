import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import {useParams} from 'react-router-dom'

const ItemDetailContainer = () => {
  // Guardo url en variable
  const url = "https://fakestoreapi.com/products";
  // Creo el state de producto
  const [producto, setProducto] = useState();
  // Hago uso de useParams para obtener id
  let id = useParams()
  let productId = id.id

  // Funcion para obtener datos de API
  const fetchApi = async () => {
    const response = await fetch(url);
    // Guardo respuesta en variable
    const responseJSON = await response.json();
    // Mapeo el array donde se guardo la respuesta
    responseJSON.map((item) => {
      if (item.id == productId) {
        // Seteo en producto el item que haya coincidido con el id
        setProducto(item);
      }
    });
  };
  // Hago uso de useEffect
  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <ItemDetail producto={producto} />
    </>
  );
};

export default ItemDetailContainer;
