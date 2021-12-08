import React, { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import logoCarrito from './carrito.png';
import './widget.css'

export const CartWidget = () => {

    const {calcularCantidad} = useContext(CartContext)

    return (
        <div style={{
            visibility: calcularCantidad() === 0 ? "hidden" : "visible"
        }}>
            <span className="widget" >{calcularCantidad()}</span>
            <img id= "imgCarrito" src={logoCarrito} alt="carrito" />   
        </div>
    )
}
