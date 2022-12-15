function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">
            <h4>Logo Mi Tienda</h4>
          </a>
        </li>
        <li>
          <a href="/">Calzado</a>
        </li>
        <li>
          <a href="/">Vestimenta</a>
        </li>
      </ul>
      {/* <CartWidget></CartWidget> */}
      <span>🛒</span>
    </nav>
  );
}

export default NavBar;
