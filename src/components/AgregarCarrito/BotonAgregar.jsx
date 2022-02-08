import React from 'react';

const BotonAgregar = ({fn, activar, texto}) => {
  return <div className='p-1'>
     <button className='btn btn-outline-dark w-100' onClick={fn} disabled={activar}>{texto}</button>
  </div>;
};

export default BotonAgregar;
