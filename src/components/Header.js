//react libraries
import { NavLink } from "react-router-dom";
//components
import folder from "../images/folder.svg";
import notifications from "../images/notifications.svg";
import logout from "../images/logout.svg";

//styles
import "../styles/components/Header.scss";

function Header() {
  return (
    <header className="header">
      <h1 className="header__title">Sigaus</h1>
      <nav className="header__nav">
        <ul className="header__nav--list">
          <li className="header__nav--list--item">
            <NavLink className="link"> Inicio </NavLink>
          </li>
          <li className="header__nav--list--item">
            <NavLink className="link"> Declaraciones </NavLink>
          </li>
          <li className="header__nav--list--item">
            <NavLink className="link"> Instalaciones </NavLink>
          </li>
          <li className="header__nav--list--item">
            <NavLink className="link"> Incidencias/Alertas </NavLink>
          </li>
          <li className="header__nav--list--item">
            <NavLink className="link"> Financiación </NavLink>
          </li>
          <li className="header__nav--list--item">
            <NavLink className="link"> Informes </NavLink>
          </li>
        </ul>
      </nav>
      <section className="header__section">
        <div className="header__section--wrap">
          <img src={notifications} alt="incidencias" className="header__logo" />
          <h2>Incidencias</h2>
        </div>
        <div className="header__section--wrap">
          <img src={folder} alt="perfil" className="header__logo" />
          <h2>Perfil</h2>
        </div>
        <div className="header__section--wrap">
          <img src={logout} alt="logout" className="header__logo" />
        </div>
      </section>
    </header>
  );
}

export default Header;
