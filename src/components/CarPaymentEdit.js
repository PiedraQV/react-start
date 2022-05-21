import React from 'react'
import { Link } from 'react-router-dom';
import { useCartContext } from './CartContext'

function CarPaymentEdit() {
    const { totalPrice } = useCartContext();
    
 return (
           <section>
           <div>
             <p>Total a pagar $ <b>{totalPrice()}</b></p>
            <Link to={'/'}>
            <button>Seguir Comprando</button>   
            </Link> <br/>
            <Link to={'/'}>              
            </Link><br/>
            <button>Pagar</button>
            </div>   
           </section>
      );

  }

export default CarPaymentEdit;