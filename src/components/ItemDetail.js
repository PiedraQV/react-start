import { useCartContext } from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({detalle}) =>{

  const { addToCart, deleteCart } = useCartContext();

  function handleOnAdd(count) {
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
          <ItemCount initial={1} exist={detalle.exist} onAdd={handleOnAdd} deleteE={borrarCarro}/>
      }
      </div>     
    )
};

export default ItemDetail;