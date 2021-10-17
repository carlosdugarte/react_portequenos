import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { buscarProductos } from '../../functions/buscarProductos'
import { ItemDetail } from './ItemDetail'
import { Spinner } from 'react-bootstrap'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    
    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()

    console.log(item);

    useEffect(()=>{
        setLoading(true);

        buscarProductos()
            .then( res => {
                setItem( res.find( prod => prod.codigo === Number(itemId)) )
            })
            .catch((err) => {            
                console.log("Ocurrió un error: "+ err)
            }) 
            .finally(()=> {
                setLoading(false)
            })

    }, [itemId])

    return (
        <div>
            {
                loading 
                ? <Spinner className="divLoading" animation="border" variant="primary"/>                    
                : <ItemDetail {...item}/>
            }
        </div>
    )
}