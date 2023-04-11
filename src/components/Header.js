//react libraries
import { NavLink } from "react-router-dom";
//components
import folder from "../images/folder.svg";
import notifications from "../images/notifications.svg";
import logout from "../images/logout.svg";

//styles

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Sigaus</h1>
      <nav className="header__nav">
        <ul className="header__nav--list">
          <li className="header__nav--list--item">
            <NavLink> Inicio </NavLink>
          </li>
          <li className="header__nav--list--item">
            <NavLink> Declaraciones </NavLink>
          </li>
          <li className="header__nav--list--item">
            <NavLink> Instalaciones </NavLink>
          </li>
          <li className="header__nav--list--item">
            <NavLink> Incidencias/Alertas </NavLink>
          </li>
          <li className="header__nav--list--item">
            <NavLink> Financiación </NavLink>
          </li>
          <li className="header__nav--list--item">
            <NavLink> Informes </NavLink>
          </li>
        </ul>
      </nav>
      <section className="header__section">
        <div>
          <img src={notifications} alt="" />
          <h2>Incidencias</h2>
        </div>
        <div>
          <img src={folder} alt="" />
          <h2>Perfil</h2>
        </div>
        <div>
          <img src={logout} alt="" />
        </div>
      </section>
    </header>
  );
}

export default Header;
