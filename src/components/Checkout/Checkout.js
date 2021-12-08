import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { UserInterfaceContext } from '../../context/UserInterfaceContext'
import 'firebase/firestore'
import Swal from 'sweetalert2'
import { Redirect } from 'react-router'
import './estilosCheckout.css'
import { Loader } from '../Loader/Loader'
import { generarOrden } from '../../firebase/generarOrden'

export const Checkout = () => {

     const {carrito, calcularTotal, vaciarCarrito} = useContext(CartContext)
     const {loading, setLoading} = useContext(UserInterfaceContext)
    
    const [values, setValues] = useState({
        nombre: '',
        apellido: '',
        correo: ''
    })

    const manejarInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const manejarSubmit = async (e) => {
        e.preventDefault()

        //validaciones del formulario
        if (values.nombre.length < 2) {
            alert("Nombre inválido")
            return
        }
        if (values.apellido.length < 2) {
            alert("Apellido inválido")
            return
        }
        if (values.correo.length < 3) {
            alert("Email inválido")
            return
        }

        //Agregar orden nueva
        setLoading(true)
        generarOrden(values, carrito, calcularTotal())
             .then((res) => {
                Swal.fire({
                    icon: 'success',
                    title: 'Orden registrada',
                    text: 'Su orden fue completada. Por favor Guarde su número de transaccion: ' + res,
                    willClose: () => {
                        vaciarCarrito()
                    }
                })
             })
             .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Productos sin stock',
                    text: `${err.map(el => el.nombre).join(', ')}`
                })
            })
            .finally(() => {
                setLoading(false)
            })

    }

    return (
        <>

        {/* Si el carrito está vacío que redirija al home */}
        {carrito.length === 0 && <Redirect to="/"/>}

        {/* Para cargar el loader en caso de ser necesario */}
        {loading && <Loader/>}

        {/* Formulario de pago */}
        <h2>Complete sus datos</h2>
            <div className="container my-5">
                <form onSubmit={manejarSubmit}>
                    {/* Nombre */}
                    <div className="mb-3">
                        <label className="form-label">Nombre</label>
                        <input 
                            required type="text" 
                            className="form-control" 
                            name="nombre" 
                            value={values.nombre}
                            placeholder="Indique su Nombre" 
                            onChange={manejarInputChange}
                        />                        
                    </div>
                    {/* Apellido */}
                        <div className="mb-3">
                        <label className="form-label">Apellido</label>
                        <input 
                            required type="text" 
                            className="form-control" 
                            name="apellido" 
                            value={values.apellido} 
                            placeholder="Indique su Apellido" 
                            onChange={manejarInputChange}
                        />
                        {values.apellido.length === 0 && <p></p>}
                    </div>
                    {/* Correo */}
                    <div>
                        <label className="form-label">Correo</label>
                        <input 
                            required type="email" 
                            className="form-control" 
                            name="correo" 
                            value={values.correo} 
                            placeholder="Indique su correo" 
                            onChange={manejarInputChange}
                        />
                    </div>
                    <br/><br/>
                    <button className="form-control btn btn btn-dark"  type="submit">
                        Finalizar                
                    </button>
                </form> 
            </div>
        </>
    )
}
