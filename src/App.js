import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";
import { CartProvider } from "./storage/cartContext";
import CartContainer from "./components/CartContainer/CartContainer";

function App() {
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
            <Route path="/" element={<HomePage />} />
            <Route path="/category/:categoryid" element={<HomePage />} />
            <Route path="/detalle/:itemid" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<CartContainer />} />

            <Route
              path="/thank-you/:orderid"
              element={<h1>Gracias por tu compra</h1>}
            />

            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
