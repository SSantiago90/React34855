import NavItem from "./NavItem";
import "./navbar.css";

function NavBar() {
  return (
    <nav>
      <ul className="nav-menu">
        <NavItem href="/"> LogoTienda </NavItem>
        {/* NavItem( {text: "Calzado"}) */}
        <NavItem href="/">Calzado</NavItem>
        <NavItem href="/">Remeras</NavItem>
        <NavItem href="/">Otros</NavItem>
        {/* <CartWidget></CartWidget> */}
        <span>🛒</span>
      </ul>
    </nav>
  );
}

export default NavBar;
