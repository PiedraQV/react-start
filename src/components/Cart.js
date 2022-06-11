import React from 'react'
import CarPaymentEdit from './CarPaymentEdit';
import { useCartContext } from './CartContext'
/* vengo de la pagina Page/CartPage*/
function Cart() {
    const { cart, deleteCart } = useCartContext();

 return (
        <div >
          {
           cart.map((product) =>
         (
         <div  className="flex items-center justify-center w-full ">
           <div className="w-screen mx-auto w-auto max-w-screen-lg m-2 border ">
           <div className=" flex">
           <div className="flex-none w-48" key={product.id}>
           <img className=" m-1 w-auto h-auto" src={product.pictureUrl} alt={product.modelo} />
           </div>  
           <div className="p-10 grow bg-stone-50 flex items-center " >
            <div className=" justify-start">
            <h1 className="text-xl text-gray-600 flex text-left font-semibold">{product.modelo}</h1>
            <p className='text-stone-700 font-normal text-lg flex text-left'>{"Precio unitario"+" "+(product.precio)}</p>
            <p className='text-stone-700 font-normal text-lg flex text-left'>{"Cantidad de productos"+" "+(product.cantidad)}</p>
            </div>
           </div>          
            <div className="justify-end p-10 grow bg-stone-50 flex items-center ">
            <div className="">
              <p className='text-stone-700 text-lg flex text-right font-bold'>Total {product.precio * product.cantidad}</p><br/>   
            <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded' onClick={ () => deleteCart (product) }>Eliminar producto</button><br/> 
           </div>    
           </div>          
           </div>  
           </div>
           </div>
         )
        )}
        <br/>
        <br/>
        <CarPaymentEdit/>
        </div>
       
      );
    
  }

export default Cart;