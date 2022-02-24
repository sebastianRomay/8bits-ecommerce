import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";
import {obtenerProductoPorId} from '../../helpers/obtenerDatos';
import { getDocs, query, collection , where , orderBy} from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig'

const ItemDetailContainer = ({id}) => {
  const [productos, setProductos] = useState();
  // useEffect(() => {
  //   obtenerProductoPorId(id, setProducto);
  // }, []);
  useEffect(() => {
    const obtenerProductos = async () => {
      const q = query(collection(db, 'productos'));
      const items = []
      const querySnapshot = await getDocs(q)
      querySnapshot.forEach((item)=>{
        items.push({...item.data(), id: item.id})
        
      })
      setProductos(items)
    }
    obtenerProductos()
  }, [])
  return (
    <>
      <ItemDetail producto={productos} />
    </>
  );
};

export default ItemDetailContainer;
