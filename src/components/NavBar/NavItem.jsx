const NavItem = ({ href, children }) => {
  // text = {text: "Calzado"}

  return (
    <li className="nav-item">
      <a className="nav-link" href={href}>
        {children}
      </a>
    </li>
  );
};

export default NavItem;
