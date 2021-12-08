import React from 'react'
import { Link } from 'react-router-dom';

export const Item = ({codigo, nombre, precio, imagen}) => {
    // console.log(nombre);

    return (
        <div className = "Container">
            <div className="card text-center">
                <img className="card-img-top" id="imgProductos" src={imagen} alt="Imagen" />
                <div className="card-body">
                    <h1 className="titulos2">{nombre}</h1>
                    <p>{precio} ARS</p>                                            
                </div>
                <div>
                    <Link to={`/detalle/${codigo}`}>                
                    <button type="button" className="btn btn btn-dark">Agregar al carrito</button>
                    </Link>
                </div>
                <br /><br />
            </div>  
        </div>
    )
}
