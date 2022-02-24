import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import {useParams} from 'react-router';
import "./ItemDetailContainer.css";
import { getDocs, query, collection , where, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig'

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      const q = query(collection(db, 'productos'));
      const items = []
      const refDoc = doc(q, id)
      const querySnapshot = await getDocs(q)

      querySnapshot.forEach((item)=>{
        items.push({...item.data(), id})
      })
      setProducto(items)
    }
    obtenerProductos()
  }, [id])

  return (
    <>
      <ItemDetail producto={producto} />
    </>
  );
};

export default ItemDetailContainer;
