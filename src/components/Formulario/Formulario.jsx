import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import BotonAgregar from '../AgregarCarrito/BotonAgregar';

const Formulario = () => {

    const cartContext = useContext(CartContext);
    const { vaciarCarrito } = cartContext;

    const finCompra = () => {
        vaciarCarrito()
        swal('Gracias por su compra', 'En breve sera contactado', 'success')
    }


  return (
    <>
        <form className='container mt-5'>
            <div className="row">

        <div className="mb-3 col-md-6 col-12">
            <label for="exampleInputEmail1" className="form-label">Nombre y Apellido</label>
            <input type="text" className="form-control" required/>
        </div>
        <div className="mb-3 col-md-6 col-12">
            <label for="exampleInputEmail1" className="form-label">Email</label>
            <input type="email" className="form-control" required/>
            <div id="emailHelp" className="form-text">Introduzca un email correcto</div>
        </div>

            </div>
            <div className="row">

            <div className="mb-3 col-md-6 col12">
            <label for="exampleInputPassword1" className="form-label">Telefono</label>
            <input type="number" className="form-control" id="exampleInputPassword1" required/>
        </div>
        <div className="mb-3 col-md-6 col-12">
            <label for="exampleInputEmail1" className="form-label">Localidad</label>
            <input type='text' className="form-control" required/>
        </div>

            </div>
        <div className="row">
        <div className="mb-3 form-check col-12 d-flex justify-content-center">
            <input type="checkbox" className="form-check-input mx-1" id="exampleCheck1" required/>
            <label className="form-check-label" for="exampleCheck1">Acepto terminos y condiciones</label>
        </div>
        </div>
        <div className="row">
            <div className="col-12">
            <Link to="/">
                  <BotonAgregar texto='Finalizar Compra' fn={finCompra}/>
            </Link>
            </div>
        </div>
        </form>
    </>
  )
}

export default Formulario