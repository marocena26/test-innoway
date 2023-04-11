//react libraries

//components
import settings from "../images/settings.svg";
import create from "../images/create.svg";
import update from "../images/update.svg";
import upload from "../images/upload.svg";
//styles
import "../styles/components/Declaraciones.scss";

function Declaraciones() {
  return (
    <>
      <section className="section__info">
        <article>
          <div>
            <h2>Declaraciones</h2>
            <p>
              Elige la opción que desees para la creación de nuevas
              declaraciones, ya sea de forma manual, simples o múltiples o
              mediante un archivo de declaraciones.
            </p>
          </div>
          <div>
            <h3>Meses abiertos a declaraciones</h3>
            <p>
              <img src={settings} alt="" /> Configurar
            </p>
          </div>
        </article>
        <aside>
          <ul>
            <li>
              <img src={create} alt="" />
              <p>Crear</p>
            </li>
            <li>
              <img src={upload} alt="" />
              <p>Subir archivo</p>
            </li>
            <li>
              <img src={update} alt="" />
              <p>Histórico de archivos</p>
            </li>
          </ul>
        </aside>
      </section>
      <section className="section__data"></section>
    </>
  );
}

export default Declaraciones;
