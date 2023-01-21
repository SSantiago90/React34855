import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import { CartProvider } from "./storage/cartContext";
import CartContainer from "./components/CartContainer/CartContainer";
import { obtenerProductos } from "./services/firebase";
import ItemListContainerSearch from "./components/ItemListContainer/ItemListContainerSearch";

function App() {
  obtenerProductos();

  function logOutSession() {
    console.log("logout");
  }

  function logInSession(username) {
    alert(`Bienvenido el usuario: ${username}`);
  }

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <NavBar onLogin={logInSession} onLogout={logOutSession} />
          <Routes>
            <Route path="/" element={<ItemListContainerSearch />} />
            <Route
              path="/category/:categoryid"
              element={<ItemListContainerSearch />}
            />
            <Route path="/detalle/:itemid" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
