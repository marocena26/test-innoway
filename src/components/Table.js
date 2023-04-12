//react libraries
import { useState } from "react";
//components
import dataTable from "../data/dataBase.json";
//images
import swap from "../images/swap.svg";
import incidencia from "../images/incidencia.svg";
import update from "../images/update.svg";
import dot from "../images/dot.svg";
import draft from "../images/draft.svg";
import arrow_back from "../images/arrow_back.svg";
import arrow_forward from "../images/arrow_forward.svg";
import notification_pen from "../images/notification_pen.svg";
import update_wait from "../images/update_wait.svg";
import double_arrow_left from "../images/double_arrow_left.svg";
import double_arrow_right from "../images/double_arrow_right.svg";
//styles
import "../styles/components/Table.scss";

function Table() {
  const [data, setData] = useState(dataTable);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const indexOfLastRecord = currentPage * recordsPerPage;

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const handleFirstPage = () => {
    setCurrentPage(1);
  };

  const handleLastPage = () => {
    setCurrentPage(9);
  };

  return (
    <section>
      <table className="section__table">
        <thead className="section__table--thead">
          <tr>
            <th className="thead__categories">
              <input type="checkbox" />
            </th>
            <th className="thead__categories">
              <div className="thead__categories--wrap">
                <p>Nº referencia</p>{" "}
                <img src={swap} alt="swap" className="icon" />
              </div>
            </th>
            <th className="thead__categories">
              <div className="thead__categories--wrap">
                <p>Tipo</p> <img src={swap} alt="swap" className="icon" />
              </div>
            </th>
            <th className="thead__categories">
              <div className="thead__categories--wrap">
                <p>Cantidad</p> <img src={swap} alt="swap" className="icon" />
              </div>
            </th>
            <th className="thead__categories">
              <div className="thead__categories--wrap">
                <p>Origen (provincia)</p>
                <img src={swap} alt="swap" className="icon" />
              </div>
            </th>
            <th className="thead__categories">
              <div className="thead__categories--wrap">
                <p>Fecha</p> <img src={swap} alt="swap" className="icon" />
              </div>
            </th>
            <th className="thead__categories">
              <div className="thead__categories--wrap">
                <p>% Oleoso</p> <img src={swap} alt="swap" className="icon" />
              </div>
            </th>
            <th className="thead__categories">Incidencia</th>
            <th className="thead__categories"> </th>
            <th className="thead__categories">Acciones</th>
          </tr>
        </thead>
        <tbody className="section__table--tbody">
          {data.map((row, index) => (
            <tr key={index}>
              <td className="td__categories">
                {" "}
                <input type="checkbox" />
              </td>
              <td className="td__categories reference">{row.reference}</td>
              <td className="td__categories center">{row.type}</td>
              <td className="td__categories center">{row.quantity}</td>
              <td className="td__categories ">{row.origin}</td>
              <td className="td__categories ">{row.date}</td>
              <td className="td__categories center">{row.oily}</td>
              <td className="td__categories center">
                {row.incidencia}
                <div className="td__categories--incidencia">
                  <div className="td__categories--incidencia--element">
                    <img
                      src={incidencia}
                      alt="incidencias"
                      className="element"
                    />{" "}
                    <p>0</p>
                  </div>
                  <div className="td__categories--incidencia--element">
                    <img src={update} alt="update" className=" element" />
                    <p>0</p>
                  </div>
                </div>
              </td>
              <td className="td__categories">
                <div className="td__categories--draft">
                  <img src={draft} alt="swap" className="icon" />
                  <p> Ver PDF</p>
                </div>
              </td>
              <td className="td__categories center">
                <img src={dot} alt="swap" className="icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* section footer */}

      <section className="section__tfoot">
        <p className="section__tfoot--text">
          Mostrando 1 a 10 de 46 declaraciones
        </p>
        <button onClick={handleFirstPage} className="section__tfoot--btn">
          <img src={double_arrow_left} alt="" className="arrow" />
        </button>
        <button onClick={handlePreviousPage} className="section__tfoot--btn">
          <img src={arrow_back} alt="" className="arrow" />
        </button>
        {/* Renderizar números de página */}
        {Array.from({ length: 9 }).map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            disabled={currentPage === index + 1}
            className="section__tfoot--btns"
          >
            {index + 1}
          </button>
        ))}
        <button onClick={handleNextPage} className="section__tfoot--btn">
          <img src={arrow_forward} alt="" className="arrow" />
        </button>
        <button onClick={handleLastPage} className="section__tfoot--btn">
          <img src={double_arrow_right} alt="" className="arrow" />
        </button>
        <form action="" className="section__tfoot--form">
          <select name="" id="" className="section__tfoot--form--select">
            <option value="">10</option>
            <option value="">9</option>
            <option value="">8</option>
            <option value="">7</option>
            <option value="">6</option>
            <option value="">5</option>
            <option value="">4</option>
            <option value="">3</option>
            <option value="">2</option>
            <option value="">1</option>
          </select>
        </form>
        <div className="section__tfoot--wrap">
          <div className="section__tfoot--wrap--notification">
            <img
              src={notification_pen}
              alt="notification_pen"
              className="element"
            />
            <p className="section__tfoot--wrap--text">Notificación pendiente</p>
          </div>
          <div className="section__tfoot--wrap--notification">
            <img src={update_wait} alt="update_wait" className="element" />
            <p className="section__tfoot--wrap--text">Notificación en espera</p>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Table;
