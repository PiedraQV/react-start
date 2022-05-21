import React from 'react'
import CarPaymentEdit from './CarPaymentEdit';
import { useCartContext } from './CartContext'

function Cart() {
    const { cart, deleteCart } = useCartContext();

 return (
        <div>
          {
           cart.map((product) =>
         (
           <section>
           <div key={product.id}>
           <div>
             <img src={product.pictureUrl} alt={product.modelo} />
            <h1>{product.modelo}</h1>
            <p>Precio unitario{product.precio}</p>
            <p>Cantidad de productos <b>{product.cantidad}</b></p><br/>
            <p>Total {product.precio * product.cantidad}</p><br/>   
            <button onClick={ () => deleteCart (product) }>Eliminar producto</button><br/>         
           </div>  
           </div>
           </section>
         )
        )}
        <br/>
        <br/>
        <CarPaymentEdit/>
        </div>
       
      );
    
  }

export default Cart;