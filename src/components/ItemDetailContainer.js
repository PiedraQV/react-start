import React, { useEffect, useState}from 'react';
import ProductsList from "../utilidades/ProductsList";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () =>{

    const {productId} = useParams()
    const [detalle, setDetalle] = useState({})
    
    useEffect(() => {
        (async() => {
            const DetailList = await getDetailProduct()
            setDetalle(DetailList)
        })()
    },[])

    const getDetailProduct = () => {
        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve(ProductsList.find(r => r.id == productId))
            },2000);
        })
    }

    return(
        <div>
            <h1>Detalles del producto - {productId} </h1>
            {<ItemDetail detalle={detalle}/>}
            </div>
    )
}

export default ItemDetailContainer;