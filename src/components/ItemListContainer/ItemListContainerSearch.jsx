import { useState, useEffect } from "react";
import Item from "./Item";
import Flex from "../Flex/Flex";
import { getCityByCategory, getCityByKeyowrd } from "../../services/firebase";
import { obtenerProductos } from "../../services/firebase";

import { useParams } from "react-router-dom";

import "./alert.css";

import Loader from "../Loader/Loader";

function ItemListContainerSearch() {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [alertText, setAlertText] = useState("");

  const [searchKeyword, setSearchKeyword] = useState("");
  const [searchFilterCities, SetSearchFilterCities] = useState([]);

  let { categoryid } = useParams();

  useEffect(() => {
    if (searchKeyword === "") {
      SetSearchFilterCities([]);
      return;
    }

    //! sin Firebase - filtrando los productos localmente
    /*  SetSearchFilterCities(
      cities.filter((item) => {
        let title = item.title.toLocaleLowerCase();
        let word = searchKeyword.toLocaleLowerCase();
        return title.indexOf(word) !== -1;
      })
    ); */

    getCityByKeyowrd(searchKeyword)
      .then((respuesta) => {
        if (respuesta.length === 0)
          throw new Error("No se encontraron productos para esa búsqueda");
        console.log("resp", respuesta);
        SetSearchFilterCities(respuesta);
        setAlertText({
          text: "Se encontraron items según tu búsqueda",
          type: "info",
        });
      })
      .catch((error) => {
        setAlertText({ text: error.message, type: "danger" });
      })
      .finally(() => setIsLoading(false));
  }, [cities, searchKeyword]);

  useEffect(() => {
    // <con Firebase

    //con Firebase />
    if (!categoryid) {
      obtenerProductos()
        .then((respuesta) => {
          setCities(respuesta);
          setAlertText({
            text: "Items Cargados Correctamente",
            type: "default",
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
          setAlertText({
            text: "Items Cargados Correctamente",
            type: "default",
          });
        })
        .catch((error) => {
          setAlertText({ text: error, type: "danger" });
        })
        .finally(() => setIsLoading(false));
    }
  }, [categoryid]);

  function handleSearch(evt) {
    const keyword = evt.target.value;
    setSearchKeyword(keyword);
  }

  if (isLoading) {
    return <Loader size={120} color="orange" />;
  } else {
    return (
      <Flex column>
        <label>
          Buscar🔎: <input onChange={handleSearch}></input>
        </label>
        {alertText && (
          <div className="alert_container">
            <span className={`alert alert_${alertText.type}`}>
              {alertText.text}
            </span>
          </div>
        )}
        <Flex>
          {searchKeyword === ""
            ? cities.map((itemIterado) => {
                return <Item key={itemIterado.id} item={itemIterado} />;
              })
            : searchFilterCities.map((itemIterado) => {
                return <Item key={itemIterado.id} item={itemIterado} />;
              })}
        </Flex>
      </Flex>
    );
  }
}

export default ItemListContainerSearch;
