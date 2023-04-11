//react libraries
import { NavLink } from "react-router-dom";
//components

//styles

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Sigaus</h1>
      <nav className="nav container">
        <ul>
          <li className="nav__item">
            <NavLink> Inicio </NavLink>
          </li>
          <li className="nav__item">
            <NavLink> Declaraciones </NavLink>
          </li>
          <li className="nav__item">
            <NavLink> Instalaciones </NavLink>
          </li>
          <li className="nav__item">
            <NavLink> Incidencias/Alertas </NavLink>
          </li>
          <li className="nav__item">
            <NavLink> Financiación </NavLink>
          </li>
          <li className="nav__item">
            <NavLink> Informes </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
