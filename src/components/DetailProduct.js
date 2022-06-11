import React from 'react'
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

//*** Recibo de ItemDetail ***//
export default function DetailProduct({detalle, terminar, handleOnAdd, borrarCarro}) {
  return (
    <section className="text-gray-700 body-font overflow-hidden bg-white">
        <div className="container px-5 py-24 mx-auto ">
          <div className="lg:w-4/5 mx-auto flex flex-wrap ">
            <img className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={detalle.pictureUrl} alt={detalle.modelo}/>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">SHOES</h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{detalle.modelo}</h1>
              <br/>
              <p className="leading-relaxed">{detalle.description}</p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                <div className="flex mx-auto items-center">
                  <span className="mr-3">Size</span>
                  <div className="relative ">
                    <select className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                      <option>40</option>
                    </select>
                    <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                        <path d="M6 9l6 6 6-6"></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
              {
              terminar ?
              (
                <Link to="/Pages/CartPage" className="p-20 m-20 bg-indigo-900 hover:bg-indigo-300 text-stone-50 py-2 px-5 focus:outline-none hover:bg-gray-200 rounded text-base">
                Terminar Compra
                </Link>
              ) : (<ItemCount initial={1} exist={detalle.exist} onAdd={handleOnAdd} deleteE={borrarCarro}/>)
             }
             </div>
          </div>
        </div>
      </section>
  )
}
