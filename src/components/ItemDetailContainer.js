import { useEffect, useState}from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import Loading from './Loading';
import { getDetailProduct} from '../utilidades/dataGetFirestore';

const ItemDetailContainer = () =>{

    const {productId} = useParams()
    const [detalle, setDetalle] = useState({})
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        (async() => {
            const DetailList = await getDetailProduct(productId)
            setDetalle(DetailList)
            setLoading(false)
        })()
    },[])


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