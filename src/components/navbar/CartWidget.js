import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import logoCarrito from './carrito.png';
import './widget.css'

export const CartWidget = () => {

    const {calcularCantidad} = useContext(CartContext)

    console.log(calcularCantidad)

    return (
        <div>
            <span className="widget" >{calcularCantidad()}</span>
            <img id= "imgCarrito" src={logoCarrito} alt="carrito" />   
        </div>
    )
}
