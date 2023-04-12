//react libraries
import { useEffect, useState } from "react";
//components

//images
import settings from "../images/settings.svg";
import create from "../images/create.svg";
import update from "../images/update.svg";
import upload from "../images/upload.svg";
import lock_open from "../images/lock_open.svg";
import lock from "../images/lock.svg";
import lock_grey from "../images/lock_grey.svg";

//styles
import "../styles/components/Info.scss";

function Info() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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
        {/* elemento para escritorio */}
        {isModalOpen ? (
          ""
        ) : (
          <div className="article__config">
            <h3 className="article__config--title">
              Meses abiertos a declaraciones
            </h3>
            <p className="article__config--text" onClick={handleOpenModal}>
              <img src={settings} alt="settings" className="icon" /> Configurar
            </p>
          </div>
        )}
        {/* elemento para escritorio */}
      </article>
      {/* elemento para responsive */}
      {isModalOpen ? (
        <article className="article__responsive">
          <h3 className="article__responsive--title">
            Meses abiertos a declaraciones
          </h3>
          <div className="article__responsive--wrap">
            <div className="article__responsive--wrap--item">
              <img src={lock} alt="settings" className="icon" /> <p>Ene</p>
            </div>
            <div className="article__responsive--wrap--item">
              <img src={lock} alt="settings" className="icon" /> <p>Feb</p>
            </div>
            <div className="article__responsive--wrap--item">
              <img src={lock} alt="settings" className="icon" /> <p>Mar</p>
            </div>
            <div className="article__responsive--wrap--item">
              <img src={lock} alt="settings" className="icon" /> <p>Abr</p>
            </div>
            <div className="article__responsive--wrap--item">
              <img src={lock} alt="settings" className="icon" /> <p>May</p>
            </div>
            <div className="article__responsive--wrap--item">
              <img src={lock_open} alt="settings" className="icon" /> <p>Jun</p>
            </div>
            <div className="article__responsive--wrap--item">
              <img src={lock_open} alt="settings" className="icon" /> <p>Jul</p>
            </div>
            <div className="article__responsive--wrap--item">
              <img src={lock_grey} alt="settings" className="icon" /> <p>Ago</p>
            </div>
            <div className="article__responsive--wrap--item">
              <img src={lock_grey} alt="settings" className="icon" /> <p>Sep</p>
            </div>
            <div className="article__responsive--wrap--item">
              <img src={lock_grey} alt="settings" className="icon" /> <p>Oct</p>
            </div>
            <div className="article__responsive--wrap--item">
              <img src={lock_grey} alt="settings" className="icon" /> <p>Nov</p>
            </div>
            <div className="article__responsive--wrap--item">
              <img src={lock_grey} alt="settings" className="icon" /> <p>Dic</p>
            </div>
          </div>
          <div onClick={handleCloseModal}>X</div>
        </article>
      ) : (
        ""
      )}

      {/* elemento para responsive */}
      <aside className="aside">
        <ul className="aside__list">
          <li className="aside__list--item">
            <div className="aside__list--item--wrap">
              <img
                src={create}
                alt="create"
                className="aside__list--item--img icon"
              />
              <p className="aside__list--item--text">Crear</p>
            </div>
          </li>
          <li className="aside__list--item">
            <div className="aside__list--item--wrap">
              <img
                src={upload}
                alt="upload"
                className="aside__list--item icon"
              />
              <p className="aside__list--item--text">Subir archivo</p>
            </div>
          </li>
          <li className="aside__list--item">
            <div className="aside__list--item--wrap">
              <img
                src={update}
                alt="update"
                className="aside__list--item icon"
              />
              <p className="aside__list--item--text">Histórico de archivos</p>
            </div>
          </li>
        </ul>
      </aside>
    </section>
  );
}

export default Info;
