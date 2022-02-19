import "./ItemListContainer.css";
import { useState, useEffect } from "react";
import ItemsList from "../../components/ItemsList/ItemsList";
import React from 'react';
import {obtenerTodosLosProductos} from '../../helpers/obtenerDatos';

const ItemListContainer = () => {
  return (
    <>
      <ItemsList />
    </>
  );
};

export default ItemListContainer;
