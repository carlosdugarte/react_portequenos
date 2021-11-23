import React, { useEffect, useState } from 'react'
import { getFirestore } from '../../firebase/config'
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

        const db = getFirestore()
        const productos = categoriaId 
                            ? db.collection('productos').where('categoria', '==', categoriaId)
                            : db.collection('productos')

        productos.get()
            .then((response) => {
                const newItems = response.docs.map((doc) => {
                    return {codigo: doc.id, ...doc.data()}
                })
                console.log(newItems)
                setItems(newItems)
            })
            .catch( err => console.log(err))
            .finally(() => {
                setLoading(false)}
            )
        

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
