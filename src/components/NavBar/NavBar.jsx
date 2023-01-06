import NavItem from "./NavItem";
import "./navbar.css";
import { Link } from "react-router-dom";

function NavBar() {
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
      </ul>
    </nav>
  );
}

export default NavBar;
