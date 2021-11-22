import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
// import {FaShoppingCart} from 'react-icons/fa';
import logoCarrito from './carrito.png';
import './widget.css'

export const CartWidget = () => {

    const {calcularCantidad} = useContext(CartContext)

    console.log(calcularCantidad)

    return (
        <div>
            <span className="widget" >{calcularCantidad()}</span>
            <img id= "imgCarrito" src={logoCarrito} alt="carrito" />
            {/* <FaShoppingCart className="widget"/> */}            
        </div>
    )
}


// .widget {
//     color: white;
//     font-size: 30px;
// }