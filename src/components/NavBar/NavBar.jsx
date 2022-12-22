import NavItem from "./NavItem";
import "./navbar.css";

function NavBar() {
  const links = [
    { title: "Remeras", url: "/remeras" },
    { title: "Otros", url: "/assdasda" },
  ];

  return (
    <nav>
      <ul className="nav-menu">
        <NavItem href="/"> LogoTienda </NavItem>

        {links.map((elemento) => {
          console.log(elemento);
          return (
            <NavItem key={elemento.title} href={elemento.url}>
              {elemento.title}
            </NavItem>
          );
        })}

        <span>🛒</span>
      </ul>
    </nav>
  );
}

export default NavBar;
