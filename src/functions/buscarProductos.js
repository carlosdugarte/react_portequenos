import { productos } from "../data/productos"

export const buscarProductos = () => {
    return (
        new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(productos)
            }, 2000)
    
        })
    )
}
