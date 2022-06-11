import { Link } from "react-router-dom";
import Cart from "../components/Cart";
import { useCartContext } from '../components/CartContext'


const CartPage = () => {
    const { cart } = useCartContext();

    return(
        <div>
        <h1  className="m-5 container-xl bg-white font-semibold text-lg text-indigo-900 p-3 bg-indigo-900 items-center text-indigo-900 leading-none lg:rounded-full flex lg:inline-flex" role="alert">Carrito</h1>
        {
        cart == 0 ?
        (
        <div>
         <h1 className="mb-5 container-xl bg-white font-semibold text-lg text-blue-900 p-3 bg-indigo-50 items-center text-indigo-900 leading-none lg:rounded-full flex lg:inline-flex" role="alert">-- Aun no hay nada en el carrito --</h1>
         <Link to={'/'}>
        <br/>
         <button className="bg-indigo-900 hover:bg-indigo-300 text-stone-50 py-2 px-5 focus:outline-none hover:bg-gray-200 rounded text-base">Regresar al inicio</button>
         </Link>      
        </div>
        ) : 
        (<Cart/>)  
      }
        </div>

    )
}
export default CartPage;