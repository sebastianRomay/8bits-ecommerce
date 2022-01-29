import { useState } from 'react';

const ItemCount = ({initial, stock}) => {
  const [contador, setContador] = useState();

  if(contador == undefined){
    setContador(parseInt(initial))
  }
  
  const sumar = () => {
    if(contador < stock){
      setContador(contador + 1)
    }
}
const restar = () => {
  if(contador !== 0){
    setContador(contador - 1)

  }
}


  return (
    <>
    <div className='d-flex justify-content-center align-items-center gap-5 p-1'>
        <button className='btn btn-dark' onClick={restar}>-</button>
          <h6>{contador}</h6>
        <button className='btn btn-dark' onClick={sumar}>+</button>
    </div>
    <button className='btn btn-outline-dark m-2'>Añadir al Carrito</button>
    </>
  ) 
};

export default ItemCount;
