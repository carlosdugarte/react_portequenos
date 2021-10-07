import React from 'react'

export const Item = ({nombre, precio, imagen}) => {
    console.log(nombre);
    return (
        <div className = "Container">
            <div className="card text-center">
                <img className="card-img-top" id="imgProductos" src={imagen} alt="Imagen" />
                <div className="card-body">
                    <h1 className="titulos2">{nombre}</h1>
                    <p>{precio} ARS</p>                                            
                </div>
                <div>
                    <button type="button" className="btn btn btn-dark">Agregar al carrito</button>
                </div>
                <br /><br />
            </div>  
        </div>
    )
}
