import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getCity } from "../../services/firebase";
import { cartContext } from "../../storage/cartContext";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [city, setCity] = useState({ title: "loading", price: "--,--" });
  const [isInCart, setIsInCart] = useState(false);

  let params = useParams();
  const { cart, addToCart } = useContext(cartContext);

  function handleAddToCart(count) {
    setIsInCart(true);
    const cityAndCount = { ...city, count: count };
    addToCart(cityAndCount);
  }

  function checkStock() {
    let itemInCart = cart.find((item) => item.id === city.id);

    let stockUpdated = city.stock;

    if (itemInCart) {
      stockUpdated = city.stock - itemInCart.count;
    }
    return stockUpdated;
  }

  useEffect(() => {
    getCity(params.itemid)
      .then((respuesta) => {
        setCity(respuesta);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <ItemDetail
      isInCart={isInCart}
      onAddToCart={handleAddToCart}
      title={city.title}
      imgurl={city.imgurl}
      category={city.category}
      price={city.price}
      stockUpdated={checkStock()}
    />
  );
}

export default ItemDetailContainer;
