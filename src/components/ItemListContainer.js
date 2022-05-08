import React, { useEffect, useState} from 'react';
import ItemList  from '../components/ItemList';
import ProductsList from '../utilidades/ProductsList'
import Loading from './Loading';

const ItemListContainer = () => {
    const [products, setProducts]=useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        getItems()
        .then((result)=>{
            setProducts(result)
            setLoading(false)
    })
        .catch((error)=>console.log(error))
    },[]);
    
    const getItems = ( )=> {
    return new Promise ((resolve, reject)=> {
        setTimeout(()=> {resolve (ProductsList)}, 2000);});
    };
    return(
        <div class="container inset-x-0 bottom-0 mx-auto px-8 py-6  buttom-0 left-0 right-0">
           {
               loading ?
               <Loading></Loading>
               :
               <ItemList products = {products} />}
        </div>
    )
};

export default ItemListContainer;
 