import React from 'react';
import ItemCount from '../ItemCount/ItemCount';

const Items = ({img, precio, title}) => {
  return (

  <>
  <div className="card m-3">
            <img src={img} className="card-img-top" alt="..."/>
            <div className="card-body d-flex justify-content-center flex-column">
                <h6 className="card-text text-center">USD {precio}</h6>
                <h6 className="card-title text-center">{title}</h6>
            </div>
            <ItemCount initial='0' stock='5' />
        </div>
  </>
  );
};

export default Items;
