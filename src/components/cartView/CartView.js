import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './estilosCartView.css'
import { BsFillTrashFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

export const CartView = () => {

    const {carrito, removeItem, calcularCantidad, calcularTotal, vaciarCarrito} = useContext(CartContext)

    return (       
                <div className="container" >                   
                    <table className="table table-hover">
                        <thead>
                        {
                            carrito.length === 0 
                                ? 
                                    <tr>
                                        <th>
                                            Carrito vacío - comience a comprar!
                                        </th>
                                    </tr> 
                                
                                : 
                            <tr>
                                <th></th>
                                <th >Item</th>
                                <th >Cantidad</th>
                                <th >Acción</th>
                                <th >Total (Costo+IVA)</th>
                            </tr>
                        }    
                        </thead> 
                        <tbody id="items" className="bodyTabla">
                                {  
                                carrito.map( (prod) => ( 
                                    <>
                                        <tr>
                                            <td>
                                                <img className="card-img-top" id="imgProductosCarrito" src={prod.imagen}  alt="Combo de 6 Tequeños regulares" />
                                            </td>         
                                            <td>{prod.nombre}</td>                            
                                            <td>{prod.cantidad}</td> 
                                            <td>                                      
                                            <button key={prod.codigo} className="btn btn-danger" onClick={() => removeItem(prod.codigo)}>
                                            <BsFillTrashFill />
                                            </button> 
                                            </td>
                                            <td>$ <span>{prod.precio}</span></td>
                                        </tr>
                                    
                                    </>
                                ))  
                                }

                        </tbody>
                        <tfoot >
                                {
                                    carrito.length === 0 
                                    ? <>
                                        <tr id="footer">  
                                            <td  >
                                                <Link to="/productos" >
                                                        Ir a Comprar
                                                </Link>
                                            </td>                                    
                                        </tr>
                                    </>
                                    : 
                                    <tr>
                                        <td  >Total productos</td>
                                        <td>{calcularCantidad()}</td>
                                        <td>
                                            <button className="btn btn-danger btn-sm" id="vaciarCarrito"  onClick={() => vaciarCarrito()}>
                                                vaciar todo
                                            </button>
                                        </td>
                                        <td className="font-weight-bold" >$ <span id="totalPrecio">${calcularTotal()}</span></td>
                                    </tr>

                                }    


                                
                        </tfoot>
                    </table>  

                    {/* <!-- Botón para comprar --> */}
                    {
                    carrito.length !== 0 
                    ?
                    <div id="botonComprar">
                        <Link to="/checkout" className="form-control btn btn btn-dark">
                            Pagar
                        </Link>
                    </div> 
                    :
                    null
                    }

                </div>
    )
}
