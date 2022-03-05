import React from "react";
import Footer from "../../components/Footer/Footer";
import Header from '../../components/Header/Header';
import NavBar from '../../components/Nav/NavBar';
import ItemDetailContainer from "../../containers/ItemDetailContainer/ItemDetailContainer";

const DetalleProducto = () => {

  return (
    <>
    <Header/>
    <NavBar/>
      <ItemDetailContainer />
      <Footer/>
    </>
  );
};

export default DetalleProducto;