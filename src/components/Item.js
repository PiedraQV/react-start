import { Link } from "react-router-dom"
 const Item = ({producto}) =>{
    return (
     <div className='p-4 md:w-1/3'>
      <div className='h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden'>
      <img src={producto.pictureUrl} alt={producto.modelo} />
      <h1 className='py-5 text-3xl font-medium'>{producto.modelo}</h1>
      <h2 className='text-2xl py-1'>${producto.precio}</h2>
      <Link to ={`/Pages/DetailPage/${ producto.id }`} class="m-20 bg-indigo-900 hover:bg-indigo-300 text-stone-50 py-2 px-5 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" ><button>Ver Detalle</button></Link>          
      </div>
     </div>         
    )
}

export default Item;