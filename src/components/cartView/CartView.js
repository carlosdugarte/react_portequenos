import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import './estilosCartView.css'

export const CartView = () => {

    const {carrito, removeItem, calcularCantidad, calcularTotal, vaciarCarrito} = useContext(CartContext)

    console.log(calcularTotal)

    return (       
                <div class="container" >                   
                    <table class="table table-hover">
                        <tr>
                          <th scope="col"></th>
                          <th scope="col">Item</th>
                          <th scope="col">Cantidad</th>
                          <th scope="col">Acción</th>
                          <th scope="col">Total (Costo+IVA)</th>
                        </tr>
                      <tbody id="items" class="bodyTabla">
                            {  
                            carrito.map( (prod) => ( 
                                <>
                                    <tr>
                                        <td>
                                            <img class="card-img-top" id="imgProductosCarrito" src={prod.imagen}  alt="Combo de 6 Tequeños regulares" />
                                        </td>         
                                        <td>{prod.nombre}</td>                            
                                        <td>{prod.cantidad}</td> 
                                        <td>                                      
                                         <button className="btn btn-danger" onClick={() => removeItem(prod.codigo)}>
                                        Eliminar
                                        </button> 
                                        
                                        {/* <button class="btn btn-info btn-sm" onClick={() => addToCart(prod.codigo)}>
                                        +
                                        </button>
                                        <button class="btn btn-danger btn-sm" onClick={() => removeItem(prod.codigo)}>
                                        -
                                        </button>   */}
                                        </td>
                                        <td>$ <span>{prod.precio}</span></td>
                                    </tr>
                                   
                                </>
                            ))  
                            }

                            

                      </tbody>
                      <tfoot class="footerTabla">
                            {
                                carrito.length === 0 // true - false
                                ? <>
                                    <tr id="footer">  
                                    <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
                                    </tr>
                                </>
                                : 
                                <tr>
                                    <td  colspan="2">Total productos</td>
                                    <td>{calcularCantidad()}</td>
                                    <td>
                                        <button class="btn btn-danger btn-sm" id="vaciarCarrito"  onClick={() => vaciarCarrito()}>
                                            vaciar todo
                                        </button>
                                    </td>
                                    <td class="font-weight-bold" >$ <span id="totalPrecio">${calcularTotal()}</span></td>
                                </tr>

                            }    


                            
                      </tfoot>
                    </table>  
        </div>
    )
}
