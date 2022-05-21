import { Link } from "react-router-dom";
import Cart from "../components/Cart";
import { useCartContext } from '../components/CartContext'


const CartPage = () => {
    const { cart } = useCartContext();

    return(
        <div>
        <h1>Carrito</h1>
        {
        cart == 0 ?
        (
        <div>
         <h1>Aun no hay nada en el carrito</h1>
         <Link to={'/'}>
         <button>Regresar al inicio</button>
         </Link>      
        </div>
        ) : 
        (<Cart/>)  
      }
        </div>

    )
}
export default CartPage;