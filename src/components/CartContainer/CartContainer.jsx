import React, { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import Button from "../Button/Button";

function CartContainer() {
  const { cart, removeItem, getTotalPriceInCart } = useContext(cartContext);

  console.log(cart.length);

  return (
    <div>
      {cart.map((itemInCart) => (
        <div>
          <h2>{itemInCart.title}</h2>
          <h4>{itemInCart.price}</h4>
          <h4>{itemInCart.count}</h4>
          <Button onClick={() => removeItem(itemInCart)} color="red">
            X
          </Button>
        </div>
      ))}
      <p>El total de tu compra es de: ${getTotalPriceInCart()}</p>
      <Button>Vaciar Carrito</Button>
      <Button>Finalizar Compra</Button>
    </div>
  );
}

export default CartContainer;
