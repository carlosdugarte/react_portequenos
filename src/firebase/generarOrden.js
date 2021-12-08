import { getFirestore } from './config'
import firebase from 'firebase'
import 'firebase/firestore'

export const generarOrden =  (datos, carrito, total) => {

    return new Promise(async (resolve, reject) => {

        //creamos la orden nueva
        const ordenNueva = {
            comprador: {
                ...datos
            },
            items: carrito.map((el) => ({id: el.codigo, precio: el.precio, cantidad:el.cantidad})),
            total: total,
            date: firebase.firestore.Timestamp.fromDate(new Date())   

        }
        
        // enviamos la orden a firestore y batch de atualizacion
        const db = getFirestore()
        const ordenes = db.collection('ordenes')
        const itemsToUpdate = db.collection('productos')
            .where(firebase.firestore.FieldPath.documentId(), 'in', carrito.map(el => el.codigo))
            
        const query = await itemsToUpdate.get()
        const batch = db.batch()

        const outOfStock = []

        query.docs.forEach((doc) => {
            const itemInCart = carrito.find(prod => prod.codigo === doc.id)

            console.log(itemInCart);

            console.log(doc.data().stock);

            if (doc.data().stock >= itemInCart.cantidad) {
                batch.update(doc.ref, {stock: doc.data().stock - itemInCart.cantidad})
                console.log("update stock");
            } else {
                outOfStock.push({...doc.data(), id: doc.id})
            }
        })

        //Si hay stock agrego la orden nueva
        if (outOfStock.length === 0) {
            ordenes.add(ordenNueva)
                .then((res) => {
                    batch.commit()
                    resolve(res.id)
                    console.log("generé orden "+res.id)
                })
        } else {
           reject(outOfStock)
        }
    })   
}