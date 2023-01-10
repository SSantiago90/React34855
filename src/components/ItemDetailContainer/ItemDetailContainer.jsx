import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getCity } from "../../services/mockService";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [city, setCity] = useState({ title: "loading", price: "--,--" });

  let params = useParams();

  function handleAddToCart(count) {
    console.log(
      `Agregaste al carrito ${count} unidades del producto ${city.title}`
    );
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
