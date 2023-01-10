import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./itemdetail.css";
import Button from "../Button/Button";

function ItemDetail({ title, imgurl, category, price, onAddToCart }) {
  return (
    <div className="card-detail_main">
      <div className="card-detail_img">
        <img src={imgurl} alt={title} />
      </div>
      <div className="card-detail_detail">
        <h1>{title}</h1>
        <h4 className="priceTag">$ {price}</h4>
        <p>{category}</p>
      </div>
      <ItemCount onAddToCart={onAddToCart} />
      <a href="/cart">
        <Button>Ir al cart</Button>
      </a>
    </div>
  );
}

export default ItemDetail;
