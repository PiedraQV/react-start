import { useCartContext } from "./CartContext";
import { useState } from "react";
import DetailProduct from "./DetailProduct";


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
      <div>
      <DetailProduct detalle={detalle} handleOnAdd={handleOnAdd} borrarCarro={borrarCarro} terminar={terminar} />
      </div>     
    )
};

export default ItemDetail;