import { useEffect, useState} from 'react';
import ProductsList from '../utilidades/ProductsList'
import Loading from './Loading';
import ItemList from './ItemList';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
    const [products, setProducts]=useState([]);
    const [loading, setLoading] = useState(true);
    const {productCategorie} = useParams();
    const [categorias, setCategorias] = useState({});

    useEffect(() => {
        (async() => {
            const categoriasList = await getCategories()
            setCategorias(categoriasList)
            setLoading(false)
            setProducts(categoriasList)
        })()
    },[productCategorie])

    const getItems = ( )=> {
    return new Promise ((resolve, reject)=> {
        setTimeout(()=> {resolve (ProductsList)
        }, 2000);});
    };

    const getCategories = ( )=> {
        if (!productCategorie) {
            return getItems();
          }
          return ProductsList.filter((item) => item.categoria == productCategorie);
     };
     
    return(
        <div class="container inset-x-0 bottom-0 mx-auto px-8 py-6  buttom-0 left-0 right-0">
           {
               loading ?
               <Loading></Loading>
               :
               <ItemList products = {products && categorias}/>}
        </div>
    )
};

export default ItemListContainer;
 