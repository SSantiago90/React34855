import NavItem from "./NavItem";
import "./navbar.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

function NavBar(props) {
  function handleSubmit(evt) {
    evt.preventDefault();
    let user = evt.target.elements[0].value;
    console.log(user);
    props.onLogin(user);
  }

  return (
    <nav>
      <ul className="nav-menu">
        <NavItem to="/"> LogoTienda </NavItem>
        <Link to="/category/Russia">Rusia</Link>
        <Link to="/category/Sweden">Suecia</Link>
        <Link to="/category/Greece">Grecia</Link>
        <Link to="/cart">
          <span>🛒</span>
        </Link>

        <Button onClick={props.onLogout}>Log Out</Button>

        <form onSubmit={handleSubmit}>
          Iniciar sesión
          <input name="user"></input>
        </form>
      </ul>
    </nav>
  );
}

export default NavBar;
