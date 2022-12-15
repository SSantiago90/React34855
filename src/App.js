import logo from "./logo.svg";
import "./App.css";
import Card from "./components/Card";
import Button from "./components/Button/Button";
import NavBar from "./components/NavBar/NavBar";

function App() {
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
    <div>
      <NavBar />
      <div style={miEstilo} className="catalogo">
        <Card
          img="https://d2r9epyceweg5n.cloudfront.net/stores/001/205/102/products/remera-lisa-am-rj-111-3374707c83b41fb15515911954612335-1024-1024.jpg"
          title="Remera"
          price={500}
          detail="Remera Coderhouse"
        />
        <Card
          img="/imgs/pantalon.jpg"
          title="Pantalon"
          price={700}
          detail="Pantalon Coderhouse"
        />
        <Card
          img="https://d3ugyf2ht6aenh.cloudfront.net/stores/001/379/565/products/zapatilla-deportiva-de-mujer-atomik1-546c3ab029fe66e42f16517625338882-1024-1024.png"
          title="Zapatillas"
          price={800}
          detail="Zapatillas Coderhouse"
        />
      </div>

      <button onClick={hacerAlgo}>Hacer Algo</button>

      <Button color="black">Click</Button>
    </div>
  );
}

export default App;
