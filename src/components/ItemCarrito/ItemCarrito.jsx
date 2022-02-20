import React from 'react';
import './ItemCarrito.css'

const ItemCarrito = ({ item, eliminarPorId }) => {
    return (
        <div className='container'>
            <div className='row mt-5 mb-5'>
                <div className='col-2'><img src={item.image} className='w-100' /></div>
                <div className='col-2 bg-outline-dark fw-bold'>ID: <br/> <span>{item.id}</span>  </div>
                <div className='col-2 bg-outline-dark fw-bold'>Nombre: <br/> <span>{item.title}</span> </div>
                <div className='col-2 bg-outline-dark fw-bold'>Cantidad: <br/> <span>{item.cantidad}</span> </div>
                <div className='col-2 bg-outline-dark fw-bold'>Precio: <br/> <span>${item.price}</span> </div>
                <button className='col-2 btn btn-danger w-10' onClick={()=>eliminarPorId(item.id)}>Eliminar</button>
            </div>
            </div>

    )
}

export default ItemCarrito