import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = ()=>{
    return(
        <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            <Link to="/" class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 24 24" width="30px" fill="#111827"><path d="M0 0h24v24H0z" fill="none"/><path d="M20 4H4v2h16V4zm1 10v-2l-1-5H4l-1 5v2h1v6h10v-6h4v6h2v-6h1zm-9 4H6v-4h6v4z"/></svg>
            <span class="ml-3 text-xl">Fractal Store</span>
            </Link>
            <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link to = {`/Pages/ProductsPage/${ 1 }`} class="text-black font-semibold mr-5 hover:text-gray-900">Nikes</Link>
            <Link to = {`/Pages/ProductsPage/${ 0 }`} class="text-black font-semibold mr-5 hover:text-gray-900">Vans</Link>
            <Link to = "Pages/About" class="text-black font-semibold mr-5 hover:text-gray-900">About</Link>
            <Link to = "Pages/CartPage"><CartWidget/></Link>
            </nav>
        </div>
        </header>
    )
}

export default NavBar;