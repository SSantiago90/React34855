import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { getCity } from "../../services/mockService";
import { cartContext } from "../../storage/cartContext";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [city, setCity] = useState({ title: "loading", price: "--,--" });

  let params = useParams();
  const { addToCart } = useContext(cartContext);

  function handleAddToCart(count) {
    const cityAndCount = { ...city, count: count };
    addToCart(cityAndCount);
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
      onAddToCart={handleAddToCart}
      title={city.title}
      imgurl={city.imgurl}
      category={city.category}
      price={city.price}
    />
  );
}

export default ItemDetailContainer;