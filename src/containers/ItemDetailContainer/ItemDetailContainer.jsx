import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const url = "https://fakestoreapi.com/products";

  const [producto, setProducto] = useState();

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();

    responseJSON.map((item) => {
      if (item.id == 14) {
        setProducto(item);
      }
    });
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <hr />
      <ItemDetail producto={producto} />
    </>
  );
};

export default ItemDetailContainer;
