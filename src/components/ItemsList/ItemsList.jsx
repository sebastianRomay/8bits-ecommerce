import React,  {useEffect, useState} from "react";
import Item from "../Item/Item";
import Spinner from "../Spinner/Spinner";
import {obtenerTodosLosProductos} from '../../helpers/obtenerDatos';
import { getDocs, query, collection , where , orderBy} from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig'
import {useParams} from 'react-router-dom';


const ItemsList = () => {

  // const [productos, setProductos] = useState([]);

  // useEffect(() => {
  //   obtenerTodosLosProductos(setProductos);
  // }, []);

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

  //   let [list,setList] = useState([]);
  //   let [load,setLoad] = useState();
    
  //   const { name } = useParams();

  //  useEffect(() => {
  //      setLoad(true)
  //      const productsCollection = collection(db,"productos")
       
  //      if (name) {
  //       const consult = query(productsCollection,where("category","==",name))
  //       getDocs(consult)
  //           .then(({ docs }) => {
  //               setList(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
  //           })
  //           .catch((error) => {
  //               console.log(error)
  //           })
  //           .finally(() => {setLoad(false)})
  //   } else {
  //       const consult = query(productsCollection,orderBy("price"))

  //       getDocs(consult)
  //           .then(({ docs }) => {
  //               setList(docs.map((doc) => ({ id: doc.id, ...doc.data() })))
  //           })
  //           .catch((error) => {
  //               console.log(error)
  //           })
  //           .finally(() => {setLoad(false)})
  //   }
    
  //  },[name])
