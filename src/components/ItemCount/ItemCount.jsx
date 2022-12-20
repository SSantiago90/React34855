import { useState } from "react";

function ItemCount() {
  const [count, setCount] = useState(0);
  let stock = 10;

  function handleAdd() {
    // count < stock
    setCount(count + 1);
  }

  function handleSubstrac() {
    setCount(count - 1);
  }

  return (
    <div
      style={{ display: "flex", border: "solid 1px black", padding: "15px" }}
    >
      Agrega al carrito
      <button disabled={count === 0} onClick={handleSubstrac}>
        -
      </button>
      <p>{count}</p>
      <button disabled={count === stock} onClick={handleAdd}>
        +
      </button>
      <button>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;
