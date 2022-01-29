import ItemCount from '../../components/ItemCount/ItemCount';
import './ItemListContainer.css';
import { useState } from 'react';
import ItemsList from '../../components/ItemsList/ItemsList';

const ItemListContainer = (props) => {
  return (
  <>
    <div className="card m-3">
        <img src={props.img} className="card-img-top" alt="..."/>
        <div className="card-body d-flex justify-content-between">
            <h5 className="card-title">{props.title}</h5>
            <h5 className="card-text">$ {props.precio}</h5>
        </div>
        <ItemCount initial='1' stock='5'/>
    </div>

  </>
  );
};

export default ItemListContainer;
