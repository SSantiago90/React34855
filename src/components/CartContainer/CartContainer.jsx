import React, { useState } from "react";
import { createOrder_WithStockControl } from "../../services/firebase";
import { useCartContext } from "../../storage/cartContext";
import Button from "../Button/Button";
import "./cart.css";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function CartContainer() {
  const [orderId, setOrderId] = useState();

  const { cart, getTotalPriceInCart } = useCartContext();
  //const navigateTo = useNavigate();

  function handleCheckout(evt) {
    //const items = cart.map( item => ( { id: item.id, price: item.price, count: item.count, title: item.title} )
    const items = cart.map(({ id, price, title, count }) => ({
      id,
      price,
      title,
      count,
    }));

    const order = {
      buyer: {
        name: "Santiago",
        email: "s@s.com",
        phone: 123456,
      },
      items: items, // id, title, price, count
      total: getTotalPriceInCart(),
      date: new Date(),
    };

    // 1. Sweet alert
    /*  createOrder(order).then((id) => {
      Swal.fire({
        title: "Gracias por tu compra!",
        text: `este es tu ticket id: ${id}`,
        icon: "success",
        confirmButtonText: "Ok!",
      });
    }); */

    //2. Redireccionar
    /*  createOrder(order).then((id) => {
      navigateTo(`/thank-you/${id}`);
    }); */

    //3. Rendering condicional
    async function sendOrder() {
      try {
        let id = await createOrder_WithStockControl(order);
        setOrderId(id);
      } catch (error) {
        Swal.fire({
          title: "Ocurrió un error con tu compra",
          text: error,
          icon: "error",
          confirmButtonText: "Volver",
        });
      }
    }

    sendOrder();
  }

  if (orderId)
    return (
      <div>
        <h1>Gracias por tu compra</h1>
        <p>El id de tu compra {orderId}</p>
      </div>
    );

  return (
    <>
      <h1>Tu Carrito</h1>

      <table className="cartList">
        <thead className="cartList_head">
          <tr className="cartList_row">
            <th>Miniatura</th>
            <th>Titulo</th>
            <th>Precio</th>
            <th>Cantidad</th>
            <th>Remover</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id} className="cartList_row">
              <td>
                <img height={50} src={item.imgurl} alt={item.title} />
              </td>
              <td>{item.title}</td>
              <td>$ {item.price}</td>
              <td>{item.count}</td>
              <td>
                <Button color="#c63224" onClick={item.removeItem}>
                  X
                </Button>
              </td>
              <th>$ --,--</th>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="cartList_detail">
        <h4>El total de tu compra es de $ --,--</h4>
      </div>
      <Button onClick={handleCheckout}>Finalizar Compra</Button>
    </>
  );
}

export default CartContainer;
