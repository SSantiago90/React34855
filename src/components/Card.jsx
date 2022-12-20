import { useState } from "react";

import Button from "./Button/Button";
import "./card.css";

function Card(props) {
  const [texto, setTexto] = useState("El usuario no clickeó aún");

  function handleClickItem() {
    setTexto("El usuario ya clickeó");
  }

  return (
    <div onClick={handleClickItem} className="item-card">
      <div className="item-card_header">
        <h2>{props.title}</h2>
      </div>
      <div className="item-card_img">
        <img src={props.img} alt={props.title} />
      </div>
      <div className="item-card_detail">
        <h3 className="item-card_price">$ {props.price}</h3>
        <small>{props.detail}</small>
      </div>

      <Button padding="22px" color="purple">
        Ver más
      </Button>
      <br></br>
      {texto}
      {/* Button( { text: "Hola desde props"} ) */}
    </div>
  );
}

export default Card;
