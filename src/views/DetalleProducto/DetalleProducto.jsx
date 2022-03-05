import React from "react";
import {useParams} from 'react-router';
import Footer from "../../components/Footer/Footer";
import Header from '../../components/Header/Header';
import NavBar from '../../components/Nav/NavBar';
import ItemDetailContainer from "../../containers/ItemDetailContainer/ItemDetailContainer";

const DetalleProducto = () => {

  // let {id} = useParams()
  // // id = parseInt(id)

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