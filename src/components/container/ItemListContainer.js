import React from 'react'
import './estilosContainer.css'

export const ItemListContainer = (props) => {

   return ( 
        <div>
            <h1 className="titulos" >{props.saludo}</h1>
        </div>
    )
}
