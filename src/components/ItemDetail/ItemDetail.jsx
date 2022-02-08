import React from 'react';
import Spinner from '../Spinner/Spinner';
import BotonAgregar from '../AgregarCarrito/BotonAgregar';
import './ItemDetail.css'

const ItemDetail = ({items}) => {

    const comprar = () => {
        alert('Gracias por tu compra :)')
    }

  return(

  <>
    { !items ? 
            <Spinner/>
: 
        items.map(item => {
            if(item.id == 2) {

                return (
                
                    <div className='container detalle mb-5'>
                        <div className="row">
                            <div className="col-md-6 col-12 d-flex justify-content-center">
                                <img src={item.image} alt="" className='w-50'/>
                            </div>
                            <div className="container col-md-6 col-12">
                                <div className="row">
                                    <div className="col-12">
                                        <h2 className='text-dark'>{item.title}</h2>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        <h2 className='text-dark'><span className='text-dark h4'>USD</span>  {item.price}<span className='text-success h6'>62%OFF</span></h2>
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-12">
                                        <p className='h6'>{item.description}</p>
                                    </div>
                                </div>
                                <div className='row mt-3'>
                                    <div className="col-6">
                                        <BotonAgregar texto='Comprar' fn={comprar}/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
    
                    )
            }

        })}
  </>
  );
};

export default ItemDetail;
