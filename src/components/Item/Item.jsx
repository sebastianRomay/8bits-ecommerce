import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';

const Items = ({img, precio, title}) => {

  const onAdd = (dato) => {
    alert(`Agregaste ${dato} productos al carrito`)
  }

  return (

  <>
  <div className="card m-3">
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body d-flex justify-content-center flex-column">
                <h6 className="card-text text-center bg-dark text-light">USD {precio}</h6>
                <h6 className="card-title text-center">{title}</h6>
            </div>
            <ItemCount initial='0' stock='5' callback={onAdd}/>
        </div>
  </>
  );
};

export default Items;
