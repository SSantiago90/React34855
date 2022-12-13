import logo from "./logo.svg";
import "./App.css";

function App() {
  const title = "¡¡¡Bienvenidos a React!!!!!!!";

  const producto = {
    precio: 500,
    nombre: "Pantalón",
    descripcion: "La remera de Coder",
  };

  const cardProduct = (
    <div>
      <h3>{producto.nombre}</h3>
      <br />
      <h3>$ {producto.precio}</h3>
    </div>
  );

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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          {title}
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          ></a>
          {cardProduct}
        </header>
      </div>
      <div style={miEstilo} className="catalogo">
        {cardProduct}
      </div>
      <button onClick={hacerAlgo}>Click me</button>
    </div>
  );
}

export default App;
