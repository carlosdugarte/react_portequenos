import React from 'react'

export const ItemDetail = ({nombre, precio, imagen, descripcion, categoria}) => {
    return (
                <div className="divProductos">                            	
                    <div>          
                        <img id= "imgProductos" src={imagen} alt="teque"/> 
                    </div> 
                        <div>
                        <h1 className="titulos">{nombre}</h1>
                        <ul>
                            <li>precio: {precio}</li>
                            <li>descripcion: {descripcion}</li>
                            <li>categoria: {categoria}</li> 
                        </ul> 
                    </div>
                    <button type="submit" className="btn btn btn-dark">
                        Comprar
                    </button> 
                </div>
    )
}
