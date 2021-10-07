import React, { useEffect, useState } from 'react'
import { buscarProductos } from '../../functions/buscarProductos'
import './estilosContainer.css'
import { ItemList } from './ItemList'


export const ItemListContainer = (props) => {

    const [items, setItems] = useState([])

    //para montar 
    useEffect(()=>{

        buscarProductos()
            .then((res) => {
                setItems(res)
                console.log("Montado correcto de Productos: "+ res)
            })
            .catch((err) => {            
                console.log("Ocurrió un error: "+ err)
            })            
            .finally(() => {
                console.log("Fin del llamado")
            })

    }, [])

   return ( 
        <div>
            {
                <ItemList productos={items} />
            }
        </div>
    )
}
