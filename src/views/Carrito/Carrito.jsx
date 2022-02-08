import React from "react";
import Header from '../../components/Header/Header';
import NavBar from '../../components/Nav/NavBar';
import ItemDetailContainer from "../../containers/ItemDetailContainer/ItemDetailContainer";

const Carrito = () => {
  return (
    <>
    <Header/>
    <NavBar/>
      <ItemDetailContainer/>
    </>
  );
};

export default Carrito;