import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemsList from "../../components/ItemsList/ItemsList";
import React from 'react';

const ItemListContainer = () => {
  const url = "https://fakestoreapi.com/products";

  const [productos, setProductos] = useState();

  const fetchApi = async () => {
    const response = await fetch(url);
    const responseJSON = await response.json();
    setProductos(responseJSON);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <>
      <ItemsList products={productos} />
    </>
  );
};

export default ItemListContainer;
