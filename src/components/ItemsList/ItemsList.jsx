import React,  {useEffect, useState} from "react";
import Item from "../Item/Item";
import Spinner from "../Spinner/Spinner";
import { getDocs, query, collection , where } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig'
import {useParams} from 'react-router-dom';


const ItemsList = () => {
  const [productos,setProductos] = useState([]);
  console.log(productos)

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
