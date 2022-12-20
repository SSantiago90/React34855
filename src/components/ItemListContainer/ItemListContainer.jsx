import { useState, useEffect } from "react";

function ItemListContainer() {
  const [test, setTest] = useState(0);

  useEffect(() => {
    console.log("Conectando a la DB...");
  }, []);
  // dependency array

  useEffect(() => {
    console.log("Update del componente - no tiene sentido");
  });

  console.log("Me ejecuto siempre --->");

  return <div onClick={() => setTest(test + 1)}>ItemListContainer</div>;
}

export default ItemListContainer;
