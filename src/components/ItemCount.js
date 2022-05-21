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
    <div>
      <div>
        <button className='m-5 bg-indigo-900 hover:bg-indigo-300 text-stone-50 py-2 px-5 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0' onClick={handleSubstract}>-</button>
        <h2>{count}</h2>
        <button className='m-5 bg-indigo-900 hover:bg-indigo-300 text-stone-50 py-2 px-5 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0' onClick={handleAdd}>+</button>
      </div>
      <button className="m-20 bg-indigo-900 hover:bg-indigo-300 text-stone-50 py-2 px-5 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" onClick={() => onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
