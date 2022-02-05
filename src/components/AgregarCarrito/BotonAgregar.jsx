import React from 'react';

const BotonAgregar = ({fn, activar}) => {
  return <div className='p-1'>
     <button className='btn btn-outline-dark w-100' onClick={fn} disabled={activar}>Añadir al Carrito</button>
  </div>;
};

export default BotonAgregar;
