import React, { useState } from 'react';

const ItemCount = ({ initial, exist, onAdd}) => {
  const [count, setCount] = useState(initial);

  const handleSubstract = () => {
    if (count > initial) {
      setCount((counter) => counter - 1);
    }
  };
  const handleAdd = () => {
    if (count < exist) {
      setCount((counter) => counter + 1);
    }
  };

  return (
    <div class="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
      <div class="mx-auto flex flex-wrap">
        <button className='m-5 bg-slate-300 hover:bg-indigo-300 text-gray-900 py-2 px-5 focus:outline-none hover:bg-gray-200 rounded text-base' onClick={handleSubstract}>-</button>
        <h2 class="flex items-center">{count}</h2>
        <button className='m-5 bg-slate-300 hover:bg-indigo-300 text-gray-900 py-2 px-5 focus:outline-none hover:bg-gray-200 rounded text-base' onClick={handleAdd}>+</button>
      </div>
      <div class="flex mx-auto items-center">
        <button className="bg-indigo-900 hover:bg-indigo-300 text-stone-50 py-2 px-5 focus:outline-none hover:bg-gray-200 rounded text-base" onClick={() => onAdd(count)}>Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemCount;
