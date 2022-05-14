import { useEffect, useState}from 'react';
import ProductsList from "../utilidades/ProductsList";
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loading from './Loading';

const ItemDetailContainer = () =>{

    const {productId} = useParams()
    const [detalle, setDetalle] = useState({})
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        (async() => {
            const DetailList = await getDetailProduct()
            setDetalle(DetailList)
            setLoading(false)
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
            {
                loading ?
                <Loading></Loading>
                :
                <ItemDetail detalle={detalle}/>}
            </div>
    )
}

export default ItemDetailContainer;