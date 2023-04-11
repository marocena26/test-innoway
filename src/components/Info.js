//react libraries

//components

//images
import settings from "../images/settings.svg";
import create from "../images/create.svg";
import update from "../images/update.svg";
import upload from "../images/upload.svg";
//styles
import "../styles/components/Info.scss";

function Info() {
  return (
    <section className="section__info">
      <article className="article">
        <div className="article__wrap">
          <h2 className="article__wrap--title">Declaraciones</h2>
          <p className="article__wrap--text">
            Elige la opción que desees para la creación de nuevas declaraciones,
            ya sea de forma manual, simples o múltiples o mediante un archivo de
            declaraciones.
          </p>
        </div>
        <div className="article__config">
          <h3 className="article__config--title">
            Meses abiertos a declaraciones
          </h3>
          <p className="article__config--text">
            <img src={settings} alt="settings" className="icon" /> Configurar
          </p>
        </div>
      </article>
      <aside className="aside">
        <ul className="aside__list">
          <li className="aside__list--item">
            <img
              src={create}
              alt="create"
              className="aside__list--item--img icon"
            />
            <p className="aside__list--item--text">Crear</p>
          </li>
          <li className="aside__list--item">
            <img src={upload} alt="upload" className="aside__list--item icon" />
            <p className="aside__list--item--text">Subir archivo</p>
          </li>
          <li className="aside__list--item">
            <img src={update} alt="update" className="aside__list--item icon" />
            <p className="aside__list--item--text">Histórico de archivos</p>
          </li>
        </ul>
      </aside>
    </section>
  );
}

export default Info;
