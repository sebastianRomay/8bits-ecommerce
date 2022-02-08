import React, {useState, useEffect} from 'react';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const url = 'https://fakestoreapi.com/products';

    const [productos, setProductos] = useState();

    const fetchApi = async () =>{
        const response = await fetch(url);
        const responseJSON = await response.json()
        setProductos(responseJSON)
        console.log(productos)
    }
    useEffect(() => {
        fetchApi();
      }, []);
  return (
  <>
  <hr />
    <ItemDetail items={productos}/>
  </>
  );
};

export default ItemDetailContainer;
