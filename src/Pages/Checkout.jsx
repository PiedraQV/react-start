import React from 'react';
import { Link } from 'react-router-dom';
import { useCartContext } from '../components/CartContext';

function Checkout() {
  const {deleteProduct} = useCartContext();
  return (
    <div>
         <div  class="flex items-center justify-center w-full ">
           <h1 class="m-5 container-xl bg-white font-semibold text-lg text-indigo-900 p-3 bg-indigo-900 items-center text-indigo-900 leading-none lg:rounded-full flex lg:inline-flex">Orden generada con éxito</h1>
           <Link to={'/'}>
           <button onClick={deleteProduct} className="mr-5 text-right bg-transparent hover:bg-indigo-900 text-indigo-900 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded text-right">Seguir Comprando</button>  
           
            </Link>
           </div>
    </div>
    
  )
}
export default Checkout
