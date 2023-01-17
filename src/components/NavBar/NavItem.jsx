import { Link } from "react-router-dom";

const NavItem = ({ to, children }) => {
  // text = {text: "Calzado"}

  return (
    <li>
      <Link className="nav-bar_link" to={to}>
        <h3>{children}</h3>
      </Link>
    </li>
  );
};

export default NavItem;
