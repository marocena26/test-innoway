//images
import arrow from "../images/arrow.svg";

//styles
import "../styles/components/DataBase.scss";

function DataBase() {
  return (
    <>
      <section className="section__database">
        <div className="section__database--wrap">
          <p className="section__database--wrap--text">
            Gestión de declaraciones
          </p>
          <p className="section__database--wrap--number">
            ago 1, 2022 - ago 31, 2022
          </p>
        </div>
        <div className="section__database--box">
          <p className="section__database--box--text">Número entradas</p>
          <p className="section__database--box--number">
            58/<span className="span">691.526,00 kg</span>{" "}
          </p>
        </div>
        <div className="section__database--box">
          <p className="section__database--box--text">Número salidas</p>
          <p className="section__database--box--number">
            0/ <span className="span">0,00 kg</span>{" "}
          </p>
        </div>
        <div className="section__database--swap">
          <img src={arrow} alt="swap" className="icon" />
          <p className="section__database--swap--text">
            {" "}
            Exportar todas las declaraciones a Excel
          </p>
        </div>
      </section>
    </>
  );
}

export default DataBase;
