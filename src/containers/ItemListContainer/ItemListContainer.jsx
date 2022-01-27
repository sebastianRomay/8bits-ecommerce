import Count from '../../components/Count/Count';
import './ItemListContainer.css';
import { useState } from 'react';

const ItemListContainer = (props) => {
  const [contador, setContador] = useState(0);
    
    const sumar = () => {
        setContador(contador + 1)
    }
    const restar = () => {
        setContador(contador - 1)
    }


  return (
  <>
    <div className="card m-3">
        <img src={props.img} className="card-img-top" alt="..."/>
        <div className="card-body d-flex justify-content-between">
            <h5 className="card-title">{props.title}</h5>
            <h5 className="card-text">$ {props.precio}</h5>
        </div>
        <div className='d-flex justify-content-center'>
          <Count fn={sumar} texto='+' />
          <h3>{contador}</h3>
          <Count fn={restar} texto='-'/>
        </div>
    </div>
  </>
  );
};

export default ItemListContainer;
