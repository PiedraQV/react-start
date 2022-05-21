import React, { createContext, useContext, useState } from 'react';

export const CartContext = createContext({});

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  function addToCart(producto, cantidad) {
    console.log({ producto, cantidad });
    
    if (isInCart(producto.id)) {
      return setCart(
        cart.map((product) =>
          product.id === producto.id
            ? { ...product, cantidad: product.cantidad + cantidad }
            : product
        )
      );
    }
    setCart([...cart, { ...producto, cantidad }]);
  }

  function isInCart(id) {
    return cart.find((producto) => producto.id === id);
  }

  const deleteCart = (producto)=>{
    const newCart = [...cart]
    const productoEstaEnElCarro = isInCart(producto.id)
    if (!productoEstaEnElCarro) {
        return
    }
    const deleteProduct = newCart.filter((prod)=>prod.id !== producto.id)
    setCart(deleteProduct)
}
const deleteProduct=()=>setCart ([0]);

function totalPrice(){
  let total = 0;
  cart.forEach((element)=>{
    total = total + element.precio * element.cantidad;
  });
  return total;
  }

  function totalProdcuts(){
    let total = 0;
    cart.forEach((element)=>{
      total = total + element.cantidad;
    });
    return total;
    }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deleteCart,
        deleteProduct,
        totalPrice,
        isInCart,
        totalProdcuts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;