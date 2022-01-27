import { useState } from 'react';

const ItemCount = ({initial, stock}) => {
  const [contador, setContador] = useState(0);

  if(contador == 0){
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
        <button className='btn btn-success' onClick={restar}>-</button>
          <h6>{contador}</h6>
        <button className='btn btn-success' onClick={sumar}>+</button>
    </div>
    </>
  ) 
};

export default ItemCount;
