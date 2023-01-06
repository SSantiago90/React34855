import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./itemdetail.css";
function ItemDetail({ title, imgurl, category, price }) {
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
      <ItemCount />
    </div>
  );
}

export default ItemDetail;
