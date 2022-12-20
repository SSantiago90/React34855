import Card from "./Card";
import Button from "./Button/Button";
import Flex from "./Flex/Flex";

import imgurl from "../imgs/zapa.png";
import ItemCount from "./ItemCount/ItemCount";

function Ejemplos() {
  const title = "¡¡¡Bienvenidos a React!!!!!!!";

  function hacerAlgo() {
    alert("Hola");
  }

  const miEstilo = {
    backgroundColor: "pink",
    margin: "30px",
    padding: "50px",
    textAlign: "center",
  };

  return (
    <>
      <Flex>
        <Card
          img="https://d2r9epyceweg5n.cloudfront.net/stores/001/205/102/products/remera-lisa-am-rj-111-3374707c83b41fb15515911954612335-1024-1024.jpg"
          title="Remera"
          price={500}
          detail="Remera Coderhouse"
        />
        <Card
          img={imgurl}
          title="Zapatillas"
          price={800}
          detail="Zapatillas Coderhouse"
        />
        <Card
          img="/imgs/pantalon.jpg"
          title="Pantalon"
          price={700}
          detail="Pantalon Coderhouse"
        />
      </Flex>

      <ItemCount stock={2} />

      <button onClick={hacerAlgo}>Hacer Algo</button>

      <Button color="black">Click</Button>
    </>
  );
}

export default Ejemplos;
