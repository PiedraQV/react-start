import { Link } from "react-router-dom";
import { useCartContext } from "./CartContext";
import ItemCount from "./ItemCount";
import { useState } from "react";


const ItemDetail = ({detalle}) =>{

  const { addToCart, deleteCart } = useCartContext();

  const [terminar, setTerminar] = useState (false)

  function handleOnAdd(count) {
    setTerminar(true)
    console.log(count);
    addToCart(detalle, count);
  }

  function borrarCarro(count){
    console.log(count);
    deleteCart(count);
    console.log ("carrito borrado")
  }
  
    return(
      <div className='p-4 md:w-1/3'>
      <img src={detalle.pictureUrl} alt={detalle.modelo} />
      <h1 className='py-5 text-3xl font-medium'>{detalle.modelo}</h1>
      <h2 className='text-2xl py-1'>${detalle.precio}</h2>
      <p>{detalle.description}</p>
      {
        terminar ?
        (
          <Link to="/Pages/CartPage" className="m-20 bg-indigo-900 hover:bg-indigo-300 text-stone-50 py-2 px-5 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
          Terminar Compra
          </Link>
        ) : (<ItemCount initial={1} exist={detalle.exist} onAdd={handleOnAdd} deleteE={borrarCarro}/>)
          
      }
      </div>     
    )
};

export default ItemDetail;