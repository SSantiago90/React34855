import React, { createContext, useContext } from "react";
import { cartContext } from "../../storage/cartContext";

function CartWidget() {
  const contexto = useContext(cartContext);

  return (
    <>
      <span>🛒</span>
      <span>{contexto.getTotalItemsInCart()}</span>
    </>
  );
}

export default CartWidget;
