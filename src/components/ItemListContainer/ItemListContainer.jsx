import { useState, useEffect } from "react";
import Item from "./Item";
import Flex from "../Flex/Flex";
import obtenerProductos, {
  getCityByCategory,
} from "../../services/mockService";
import { useParams } from "react-router-dom";

import "./alert.css";

import Loader from "../Loader/Loader";

function ItemListContainer() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [alertText, setAlertText] = useState();

  let { categoryid } = useParams();

  console.log("Renderizmos ILC");

  useEffect(() => {
    if (!categoryid) {
      obtenerProductos()
        .then((respuesta) => {
          setCities(respuesta);
          setAlertText({
            text: "Items Cargados Correctamente",
            type: "danger",
          });
        })
        .catch((error) => {
          setAlertText({ text: error, type: "danger" });
        })
        .finally(() => setIsLoading(false));
    } else {
      getCityByCategory(categoryid)
        .then((respuesta) => {
          setCities(respuesta);
          setIsLoading(false);
        })
        .finally(() => setIsLoading(false));
    }
  }, [categoryid]);

  // 2. return con if temprano/ early return
  if (isLoading) {
    return <Loader size={120} color="orange" />;
  } else {
    return (
      <>
        <Flex>
          {alertText && (
            <div className="alert_container">
              <span className={`alert alert_${alertText.type}`}>
                {alertText.text}
              </span>
            </div>
          )}
          <Flex>
            {cities.map((itemIterado) => {
              return <Item key={itemIterado.id} item={itemIterado} />;
            })}
          </Flex>
        </Flex>
      </>
    );
  }

  // 1. operador ternario
  /*  return (
    <>
      {isLoading ? (
        <h3>Cargando...</h3>
      ) : (
        <Flex>
          {cities.map((itemIterado) => {
            return <Item key={itemIterado.id} item={itemIterado} />;
          })}
        </Flex>
      )}
    </>
  ); */
}

export default ItemListContainer;
