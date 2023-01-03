import React, { useState, useEffect } from "react";
import { getCity } from "../../services/mockService";
import ItemDetail from "./ItemDetail";

function ItemDetailContainer() {
  const [city, setCity] = useState([]);

  useEffect(() => {
    getCity()
      .then((respuesta) => {
        setCity(respuesta);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <ItemDetail
      title={city.name}
      imgurl={city.imgurl}
      category={city.category}
      price={city.price}
    />
  );
}

export default ItemDetailContainer;
