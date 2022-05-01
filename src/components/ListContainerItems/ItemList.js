import React, { useEffect, useState} from 'react';
import { getItems } from '../../utilidades/getItems';

const ItemList = () => {
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        getItems()
        .then((result)=>setProducts(result))
        .catch((error)=>console.log(error))
    },[]);
    return(
        <div className='flex flex-wrap -m-4'>
        {products.map((producto) => (
                <div className='p-4 md:w-1/3 '>
                     <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
                     <img src={producto.pictureUrl} alt={producto.modelo} />
                     <h1 className='py-5 text-3xl font-medium'>{producto.modelo}</h1>
                     <h2 className='text-2xl py-1'>${producto.precio}</h2>
                     <h3 className='text-base py-1'>Talla {producto.talla}</h3> 
                     <button class="m-10 bg-indigo-900 hover:bg-indigo-300 text-stone-50 py-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Comprar</button>               
                     </div>
                </div>
        ))}
        </div>
    )

};

export default ItemList;