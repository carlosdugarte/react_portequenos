import React, { useEffect, useState } from 'react'
import { buscarProductos } from '../../functions/buscarProductos'
import './estilosContainer.css'
import { ItemList } from './ItemList'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap'
import { useParams } from 'react-router';


export const ItemListContainer = (props) => {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(false)

    const {categoriaId} = useParams()

    //para montar 
    useEffect(()=>{

        setLoading(true);

        buscarProductos()
            .then((res) => {
                if(categoriaId){
                    setItems( res.filter(prod => prod.categoria === categoriaId) )
                }else{
                    setItems(res)
                }
                console.log("Montado correcto de Productos: "+ res)
            })
            .catch((err) => {            
                console.log("Ocurrió un error: "+ err)
            })            
            .finally(() => {
                setLoading(false)
                console.log("Fin del llamado")
            })

    }, [categoriaId])

   return ( 
        <div>
            {
            loading 
                ? <Spinner className="divLoading" animation="border" variant="primary"/>                
                : <ItemList productos={items} />
            }
        </div>
    )
}
