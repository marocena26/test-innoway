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
            <NavLink to="/Inicio" className="link item__hover">
              {" "}
              Inicio{" "}
            </NavLink>
          </li>
          <li className="header__nav--list--item">
            <NavLink to="/" className="link item__hover">
              {" "}
              Declaraciones{" "}
            </NavLink>
          </li>
          <li className="header__nav--list--item">
            <NavLink to="/Instalaciones" className="link item__hover">
              {" "}
              Instalaciones{" "}
            </NavLink>
          </li>
          <li className="header__nav--list--item">
            <NavLink to="/Incidencias" className="link item__hover">
              {" "}
              Incidencias/Alertas{" "}
            </NavLink>
          </li>
          <li className="header__nav--list--item">
            <NavLink to="/Financiacion" className="link item__hover">
              {" "}
              Financiación{" "}
            </NavLink>
          </li>
          <li className="header__nav--list--item">
            <NavLink to="/Informes" className="link item__hover">
              {" "}
              Informes{" "}
            </NavLink>
          </li>
        </ul>
      </nav>
      <section className="header__section">
        <div className="header__section--wrap">
          <img src={notifications} alt="incidencias" className="logo" />
          <h2 className="header__section--wrap--title">Incidencias</h2>
          <div class="rectangle"></div>
        </div>
        <div className="header__section--wrap profile">
          <img src={folder} alt="perfil" className="logo" />
          <h2 className="header__section--wrap--title">Perfil</h2>
        </div>
        <div className="header__section--wrap logout">
          <img src={logout} alt="logout" className="logo" />
        </div>
      </section>
    </header>
  );
}

export default Header;
