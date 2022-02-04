import { useState } from 'react';
import BotonAgregar from '../AgregarCarrito/BotonAgregar';
import './ItemCount.css';

const ItemCount = ({initial, stock}) => {
  const [contador, setContador] = useState();
  const [boton, setBoton] = useState(false);

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

// const activar = () => {
//   if(contador = 0){
//     setBoton(!boton)
  // } else {
  //   setBoton(boton = false)
  // }
// }}


const onAdd = () => {
  alert(`Agregaste ${contador} productos al carrito`)
}

  return (
    <>
    <div className='d-flex justify-content-center align-items-center gap-5 p-1'>
        <button className='btn btn-dark' onClick={restar}>-</button>
          <h6>{contador}</h6>
        <button className='btn btn-dark' onClick={sumar}>+</button>
    </div>
    <BotonAgregar fn={onAdd} botonActivo={boton}/>
    </>
  ) 
};

export default ItemCount;
