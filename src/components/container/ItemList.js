import React from 'react'
import { Item } from './Item'

export const ItemList = ( {productos = []} ) => {
    return (
        <div className="divProductos">          
            { productos.map((item) => <Item {...item} key={item.codigo}/> ) }
        </div>
    )
}
