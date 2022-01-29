import React from 'react';

const ItemsList = () => {

    const obtenerProductos = () => {

        fetch('https://fakestoreapi.com/products')
                .then(res=>res.json())
                .then(json=> {
                    json.map(item => console.log(item.title))
                    }
                )

    }
    
  return (
  <>
  <div>{obtenerProductos()}</div>
  </>
  );
};

export default ItemsList;
