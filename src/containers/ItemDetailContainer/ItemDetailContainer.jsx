import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import {useParams} from 'react-router';
import "./ItemDetailContainer.css";
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import Spinner from '../../components/Spinner/Spinner'

const ItemDetailContainer = () => {
  // const { id } = useParams();
  // const [producto, setProducto] = useState([]);

  // useEffect(() => {
  //   const obtenerProductos = async () => {
  //     const q = query(collection(db, 'productos'));
  //     const items = []
  //     const refDoc = doc(q, id)
  //     const querySnapshot = await getDocs(q)

  //     querySnapshot.forEach((item)=>{
  //       items.push({...item.data(), id})
  //     })
  //     setProducto(items)
  //   }
  //   obtenerProductos()
  // }, [id])
  const [producto, setProducto] = useState({})
    const [loading, setLoading] = useState(true);

    const { idDetalle } = useParams();

    useEffect(() => {
        setTimeout(() => {
            const queryCollection = doc(db, 'productos', idDetalle)
            getDoc(queryCollection)
            .then(resp => setProducto({id: resp.id, ...resp.data()}))
            setLoading(false);
        }, 2000);
    }, [idDetalle]);

  return (
    <>
    <div>            
            {loading ? 
            //TRUE
            <Spinner/>
            :
            //FALSE
            <ItemDetail producto={producto}/>} 
        </div>
      {/* <ItemDetail producto={producto} /> */}
    </>
  );
};

export default ItemDetailContainer;
