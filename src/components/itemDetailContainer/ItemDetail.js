import React, { useContext } from 'react'
import { useState } from 'react'
import { CartContext } from '../../context/CartContext'
import { ItemCount } from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom'

export const ItemDetail = ({codigo, nombre, precio, imagen, descripcion, categoria, stock}) => {

    //Traigo la función addToCart del contexto
    const {addToCart, isInCart} = useContext(CartContext);
    
    //Estado de cantidad
    const [cantidad, setCantidad] = useState(0);

    //Función agregar item al carrito
    const handleAgregar = () => {
        const newItem = {
            codigo,
            nombre, 
            precio, 
            descripcion, 
            categoria, 
            cantidad,
            imagen
        }

        if(cantidad > 0)
        addToCart(newItem);
    }

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

                    {
                        isInCart(codigo) 
                        ?
                        <Link to="/carrito" className="btn btn-success">Terminar compra</Link>
                        :
                        <>
                        <ItemCount cantidad={cantidad} setCantidad={setCantidad} stock={stock}/>
                        <button type="submit" className="btn btn btn-dark" onClick={handleAgregar}>
                            Comprar
                        </button> 
                        </>

                    }                    
                </div>
    )
}
