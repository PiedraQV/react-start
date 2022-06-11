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
        //** ya vengo de Page/DetailPage**/
        <div className='p-5'>
            <h1 class="m-5 container-xl bg-white font-semibold text-lg text-indigo-900 p-3 bg-indigo-900 items-center text-indigo-900 leading-none lg:rounded-full flex lg:inline-flex" role="alert">Detalles del producto </h1>
            {
                loading ?
                <Loading></Loading>
                :
                <ItemDetail detalle={detalle}/>}
            </div>
    )
}

export default ItemDetailContainer;