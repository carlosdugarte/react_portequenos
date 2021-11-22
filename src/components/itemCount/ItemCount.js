import React from 'react'

export const ItemCount = ( {cantidad, setCantidad, stock} ) => {

    const restarItem = () =>{
        if(cantidad > 0)
        setCantidad(cantidad - 1)
    }

    const sumarItem = () =>{
        if(cantidad < stock)
        setCantidad(cantidad + 1)
    }

    return (
        <div>   
            <button id="botonMenosItem" class="btn btn-danger btn-sm" onClick={restarItem}>
            -
            </button>                
            <span> {cantidad} </span>
            <button id="botonMasItem" class="btn btn-info btn-sm" onClick={sumarItem}>
            +
            </button>
        </div>
    )
}
