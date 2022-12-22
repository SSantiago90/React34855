import { useState, useEffect } from "react";

import Item from "./Item";
import Flex from "../Flex/Flex";
import obtenerProductos from "../../services/mockService";

function ItemListContainer() {
  const [cities, setCities] = useState([]);

  console.log("%cRenderizando ItemListContainer", "background-color: blue");

  useEffect(() => {
    obtenerProductos()
      .then((respuesta) => {
        setCities(respuesta);
      })
      .catch((error) => alert(error));
  }, []);

  return (
    <Flex>
      {cities.map((itemIterado) => {
        return (
          <Item id={itemIterado.id} key={itemIterado.id} item={itemIterado} />
        );
      })}
    </Flex>
  );
}

export default ItemListContainer;
