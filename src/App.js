import "./App.css";
import Ejemplos from "./components/Ejemplos";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer />
      <Ejemplos />
      <button className="btn">Fuera del componente</button>
    </div>
  );
}

export default App;
