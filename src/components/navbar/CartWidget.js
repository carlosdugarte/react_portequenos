import React from 'react'
import logoCarrito from './carrito.png';

export const CartWidget = () => {
    return (
        <div>
            <a className="navbar-brand" href="../public/index.html">
                <img id= "imgCarrito" src={logoCarrito} alt="carrito"/>
            </a>
        </div>
    )
}
