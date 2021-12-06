import React from 'react'
import { TabBar } from '../TabBar/TabBar'
import { Item } from './Item'

export const ItemList = ( {productos = []} ) => {

    return (
        <>
        <div>
            <TabBar/>
        </div>
        <div className="divProductos">          
            { productos.map((item) => <Item {...item} key={item.codigo}/> ) }
        </div>
        </>
    )
}
