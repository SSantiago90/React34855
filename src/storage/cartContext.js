import { createContext, useEffect, useState } from "react";

//1. Crear un context
export const cartContext = createContext({ cart: [] });

//2 Inicializamos el Provider
function CartProvider(props) {
  console.log("renderizamos cart provider");
  const [cart, setCart] = useState([]);

  const test = () => console.log("test");

  function addToCart(item) {
    let isInCart = cart.findIndex((itemInCart) => itemInCart.id === item.id);
    let newCart = cart.map((item) => item);

    if (isInCart !== -1) {
      /* newCart[isInCart] */
      alert("Cuidado! item ya agregado");
    } else {
      newCart.push(item);
      setCart(newCart);
    }

    // operador spread -> ...
    // Array.map

    /* A.
    let newCart = [...cart]
    newCart.push(item);
    setCart(newCart) */

    /*B: setCart([...cart, item]); */
  }

  function removeItem(itemid) {}

  function clear() {
    //
  }

  function getTotalItemsInCart() {
    // reduce 👌

    let total = 5;
    // por Cada producto(for, forEach) -> total += producto.count
    return cart.length;
  }

  function getTotalPriceInCart() {
    return 1000;
  }

  return (
    //3. Retornamos el Provider del context con un value personalizado
    <cartContext.Provider
      value={{
        cart,
        test,
        addToCart,
        getTotalItemsInCart,
        getTotalPriceInCart,
        removeItem,
      }}
    >
      {/* 4. Renderizamos los children */}
      {props.children}
    </cartContext.Provider>
  );
}

export { CartProvider };
