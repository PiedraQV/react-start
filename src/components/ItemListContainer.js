import { useEffect, useState} from 'react';
import {getAllItems, getAllItemsId } from '../utilidades/dataGetFirestore'
import Loading from './Loading';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts]=useState([]);
    const [loading, setLoading] = useState(true);
    const {productCategorie} = useParams();


    useEffect(() => {
        if (productCategorie === undefined) {
            getAllItems(productCategorie).then((respuestaPromise)=>{
                setLoading(false)
                setProducts(respuestaPromise);
                
            });
        } else {
            getAllItemsId(parseInt(productCategorie)).then((respuestaPromise)=>{
                setLoading(false)
                setProducts(respuestaPromise)
            });
        }
        },[productCategorie]);
      
    return(
        <div class="container inset-x-0 bottom-0 mx-auto px-8 py-6  buttom-0 left-0 right-0">
           {
               loading ?
               <Loading></Loading>
               :
               <ItemList products = {products}/>}
        </div>
    )
};

export default ItemListContainer;
 