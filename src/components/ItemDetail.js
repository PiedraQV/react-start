import { Link } from "react-router-dom";

const ItemDetail = ({detalle}) =>{
    return(
      <div className='p-4 md:w-1/3'>
      <img src={detalle.pictureUrl} alt={detalle.modelo} />
      <h1 className='py-5 text-3xl font-medium'>{detalle.modelo}</h1>
      <h2 className='text-2xl py-1'>${detalle.precio}</h2>
      <p>{detalle.description}</p>
      <Link to={"/Pages/CartPage"}><button class="mt-20 bg-indigo-900 hover:bg-indigo-300 text-stone-50 py-2 px-5 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" >Comprar</button></Link>           
      </div>     
    )
};

export default ItemDetail;