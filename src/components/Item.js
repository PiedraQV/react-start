import { Link } from "react-router-dom"
export const Item = ({producto}) =>{
    return (
     <div class="bg-white max-w-sm rounded overflow-hidden shadow-lg m-3">
     <img class="w-full" src={producto.pictureUrl} alt={producto.modelo}/>
     <div class="px-6 py-4">
       <div class="font-bold text-xl mb-2">{producto.modelo}</div>
       <p class="text-gray-700 text-base">
       ${producto.precio}  
       </p>
       <br/>
       <Link to ={`/Pages/DetailPage/${ producto.id }`} className="m-2 bg-indigo-900 hover:bg-indigo-300 text-stone-50 py-2 px-5 focus:outline-none hover:bg-gray-200 rounded text-base" ><button>Ver Detalle</button></Link>
     </div>
     <div class="px-6 pt-4 pb-2">
       <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Cantidad <strong> {producto.exist}</strong></span>
     </div>
   </div>         
    )
}