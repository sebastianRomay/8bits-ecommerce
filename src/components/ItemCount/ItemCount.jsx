import { useState } from 'react';
import BotonAgregar from '../AgregarCarrito/BotonAgregar';
import './ItemCount.css';

const ItemCount = ({initial, stock, callback}) => {
  const [contador, setContador] = useState();
  const [boton, setBoton] = useState(true);
  
  if(contador == undefined){
    setContador(parseInt(initial))
  }
  
  const sumar = () => {
    if(contador < stock){
      setContador(contador + 1)
      setBoton(false)
    }
}
const restar = () => {
  if(contador <= 1) {
    setBoton(true)
  }
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
    <BotonAgregar fn={() => callback(contador)} activar={boton} texto='Agregar Al carrito'/>
    </>
  ) 
};

export default ItemCount;
