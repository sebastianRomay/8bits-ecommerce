import React, { useState, useEffect } from "react";
import ItemDetail from "../../components/ItemDetail/ItemDetail";
import {useParams} from 'react-router';
import "./ItemDetailContainer.css";
import { doc, getDoc} from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import Spinner from '../../components/Spinner/Spinner'

const ItemDetailContainer = () => {
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
            <Spinner/>
            :
            <ItemDetail producto={producto}/>} 
        </div>
    </>
  );
};

export default ItemDetailContainer;
