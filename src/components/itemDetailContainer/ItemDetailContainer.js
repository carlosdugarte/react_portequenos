import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getFirestore } from '../../firebase/config'
import { ItemDetail } from './ItemDetail'
import { Spinner } from 'react-bootstrap'

export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    
    const [loading, setLoading] = useState(false)

    const {itemId} = useParams()

    //console.log(item);

    useEffect(()=>{
        setLoading(true);

        const db = getFirestore()
        const productos = db.collection('productos')
        const item = productos.doc(itemId)

        item.get()
            .then((doc) => {
                setItem({
                    codigo: doc.id,
                    ...doc.data()
                })
            })
            .catch( err => console.log(err))
            .finally(() => {
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