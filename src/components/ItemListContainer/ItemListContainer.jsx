import { useState, useEffect } from "react";

import Item from "./Item";
import Flex from "../Flex/Flex";
import obtenerProductos, {
  getCityByCategory,
} from "../../services/mockService";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const [cities, setCities] = useState([]);
  let { categoryid } = useParams();

  console.log("Renderizmos ILC");

  useEffect(() => {
    if (!categoryid) {
      obtenerProductos()
        .then((respuesta) => {
          setCities(respuesta);
        })
        .catch((error) => alert(error));
    } else {
      getCityByCategory(categoryid).then((respuesta) => {
        setCities(respuesta);
      });
    }
  }, [categoryid]);

  return (
    /* INCORPORAR <ITEMLIST/> */
    <Flex>
      {cities.map((itemIterado) => {
        return <Item key={itemIterado.id} item={itemIterado} />;
      })}
    </Flex>
  );
}

export default ItemListContainer;
