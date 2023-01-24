import { createContext, useEffect, useState, useContext } from "react";
import { useDeepCopy } from "../hooks/useDeepCopy";

//1. Crear un context
export const cartContext = createContext({ cart: [] });

//2 Inicializamos el Provider
export function CartProvider(props) {
  const [cart, setCart] = useState([]);
  let newCart = useDeepCopy(cart);

  const test = () => console.log("test");

  function addToCart(item) {
    let isInCart = cart.findIndex((itemInCart) => itemInCart.id === item.id);

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
    let total = 1500;
    return total;
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

export function useCartContext() {
  return useContext(cartContext);
}
