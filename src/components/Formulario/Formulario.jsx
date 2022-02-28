import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
import BotonAgregar from '../AgregarCarrito/BotonAgregar';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';

const estadoInicial = {
    nombre: '',
    email: '',
    telefono: '',
    localidad: ''
}
const Formulario = () => {

    const [valores, setValores] = useState(estadoInicial)

    const obtenerValor = (e) => {
        let { value, name } = e.target;
        setValores({ ...valores, [name]: value })
    }

    const cartContext = useContext(CartContext);
    const { vaciarCarrito } = cartContext;

    const finCompra = async (e) => {
        e.preventDefault()
        vaciarCarrito()

        const docRef = await addDoc(collection(db, 'clientes'), {
            valores
        })
        swal('Gracias por su compra', `Su id de transaccion es: ${docRef.id}`, 'success')
        setValores(estadoInicial)
    }


    return (
        <>
            <form className='container mt-5' onSubmit={finCompra} >
                <div className="row">

                    <div className="mb-3 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Nombre y Apellido</label>
                        <input type="text" className="form-control" name='nombre' value={valores.nombre} required onChange={obtenerValor} />
                        <div id="emailHelp" className="form-text">Introduzca su nombre completo</div>
                    </div>
                    <div className="mb-3 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Email</label>
                        <input type="email" className="form-control" value={valores.email} name='email' onChange={obtenerValor} required />
                        <div id="emailHelp" className="form-text">Introduzca un email correcto</div>
                    </div>

                </div>
                <div className="row">

                    <div className="mb-3 col-md-6 col-12">
                        <label for="exampleInputPassword1" className="form-label">Telefono</label>
                        <input type="number" className="form-control" name='telefono' onChange={obtenerValor} value={valores.telefono} id="exampleInputPassword1" required />
                        <div id="emailHelp" className="form-text">Introduzca su numero telefonico</div>
                    </div>
                    <div className="mb-3 col-md-6 col-12">
                        <label for="exampleInputEmail1" className="form-label">Localidad</label>
                        <input type='text' className="form-control" name='localidad' onChange={obtenerValor} value={valores.localidad} required />
                        <div id="emailHelp" className="form-text">Introduzca la localidad donde vive</div>
                    </div>

                </div>
                <div className="row">
                    <div className="col-3 mx-auto">
                        <input type='submit' className='btn btn-outline-dark' value='Finalizar Compra' />
                    </div>
                </div>
            </form>
        </>
    )
}

export default Formulario