import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext';
import {createBuyOrder} from "../utilidades/dataGetFirestore";

//**Vengo del componente cart**//
function CarPaymentEdit() {
    const { totalPrice } = useCartContext();
    const {cart, deleteProduct} = useCartContext();

    function handleBuy(){
        const buyOrder = {
            buyer: {
                name: "Juliana",
                phone: "3113113111",
                email: "juliana@gmail.com",
            },
            items: [...cart],
            date: new Date(),
            total: 0
        }
        createBuyOrder(buyOrder);
        deleteProduct();
    }
    
 return (
           <section className='relative m-20'>
           <div className='container-xl bg-indigo-50 p-5 fixed bottom-0 left-0 right-0'>
          <div className='container mx-auto flex p-5 items-center '>
            <div className='w-1/2 flex'> 
          <p className='text-stone-700 text-lg flex text-right font-medium'>Total a pagar $ <strong>{totalPrice()}</strong></p>
          </div>
          <div className='w-1/2 justify-end flex flex-wrap mx-auto md:ml-auto text-right'> 
          <Link to={'/'}>
            <button className="mr-5 text-right bg-transparent hover:bg-indigo-900 text-indigo-900 font-semibold hover:text-white py-2 px-4 border border-blue-900 hover:border-transparent rounded text-right">Seguir Comprando</button>   
            </Link>
            <Link to={'/Pages/Checkout'}>
             <button onClick={handleBuy} className="bg-indigo-900 hover:bg-indigo-300 text-stone-50 py-2 px-5 focus:outline-none hover:bg-gray-200 rounded text-base" >Pagar</button>
            </Link>
            
            </div>
            </div>   
          </div>        
           </section>
      );

  }

export default CarPaymentEdit;