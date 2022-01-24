import { useState } from 'react';

const Count = () => {
    const [contador, setContador] = useState(0);
    
    const sumar = () => {
        setContador(contador + 1)
    }
    const restar = () => {
        setContador(contador - 1)
    }
  return (
    <>
    <div className='d-flex my-3'>

        <button className='btn btn-success' onClick={restar}>-</button>
        <h2 className='mx-5'>{contador}</h2>
        <button className='btn btn-success' onClick={sumar}>+</button>
    </div>
    </>
  ) 
};

export default Count;
