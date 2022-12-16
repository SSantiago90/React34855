import NavItem from "./NavItem";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <a className="navbar-brand" href="#">
            <NavItem href="/"> LogoTienda </NavItem>
          </a>
          {/* NavItem( {text: "Calzado"}) */}
          <NavItem href="/calzado">Calzado</NavItem>
          <NavItem href="/remeras">Remeras</NavItem>
          <NavItem href="/otros">Otros</NavItem>
        </ul>

        {/* <CartWidget></CartWidget> */}
        <span>🛒</span>
      </div>
    </nav>
  );
}

export default NavBar;
