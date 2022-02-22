import React from 'react';
import './ItemCarrito.css'

const ItemCarrito = ({ item, eliminarPorId }) => {

    return (
        <div className='container'>
            <div className='row mt-5 mb-5'>
                <div className='col-3'><img src={item.image} className='w-100' alt='Imagen de producto'/></div>
                <div className='col-1 fw-bold'>ID: <br/> <span>{item.id}</span>  </div>
                <div className='col-2 fw-bold'>Nombre: <br/> <span>{item.title}</span> </div>
                <div className='col-2 fw-bold'>Cantidad: <br/> <span>{item.cantidad}</span> </div>
                <div className='col-2 fw-bold'>Precio: <br/> <span>${item.price * item.cantidad}</span> </div>
                <div className="col-1"><button className='btn btn-outline-danger w-10' onClick={()=>eliminarPorId(item.id, item.cantidad, item.price)}>X</button></div>  
            </div>
            </div>
        

    )
}

export default ItemCarrito