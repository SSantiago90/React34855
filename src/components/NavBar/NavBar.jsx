import { useContext } from "react";

import NavItem from "./NavItem";
import "./navbar.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
import CartWidget from "./CartWidget";

function NavBar(props) {
  function handleSubmit(evt) {
    evt.preventDefault();
    let user = evt.target.elements[0].value;
    props.onLogin(user);
  }

  return (
    <nav>
      <ul className="nav-menu">
        <NavItem to="/"> LogoTienda </NavItem>
        <Link className="nav-bar_link" to="/category/Russia">
          Rusia
        </Link>
        <Link className="nav-bar_link" to="/category/Sweden">
          Suecia
        </Link>
        <Link className="nav-bar_link" to="/category/Greece">
          Grecia
        </Link>
        <form onSubmit={handleSubmit}>
          Iniciar sesión
          <input name="user"></input>
          <Button onClick={props.onLogout}>Log Out</Button>
        </form>
        <Link to="/cart">
          <CartWidget />
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
