//react libraries

//components

//images
import swap from "../images/swap.svg";
import incidencia from "../images/incidencia.svg";
import update from "../images/update.svg";
import dot from "../images/dot.svg";
import draft from "../images/draft.svg";
//styles
import "../styles/components/Table.scss";

function Table() {
  const tablaData = [
    {
      reference: "DCS00460001447720220215037",
      type: "B",
      quantity: "25,140.00 kg",
      origin: "BARCELONA",
      date: "02/08/2022",
      oily: "20",
    },
    {
      reference: "DCS00460001447720220215044",
      type: "B",
      quantity: "25,120.00 kg",
      origin: "VALENCIA",
      date: "03/08/2022",
      oily: "92.87",
    },
    {
      reference: "DCS30010003226820220055581",
      type: "B",
      quantity: "25,340.00 kg",
      origin: "ALAVA",
      date: "02/08/2022",
      oily: "92.69",
    },
    {
      reference: "DCS30023000121120224593449",
      type: "B",
      quantity: "24,440.00 kg",
      origin: "ALBACETE",
      date: "02/08/2022",
      oily: "94.4",
    },
    {
      reference: "DCS30110000440320220006595",
      type: "B",
      quantity: "24,940.00 kg",
      origin: "CADIZ",
      date: "03/08/2022",
      oily: "96.45",
    },
    {
      reference: "DCS30410001395920220059977",
      type: "B",
      quantity: "27,940.00 kg",
      origin: "SEVILLA",
      date: "04/08/2022",
      oily: "93.2",
    },
    {
      reference: "DCS30300000009720220004508",
      type: "B",
      quantity: "24,240.00 kg",
      origin: "GRANADA",
      date: "10/08/2022",
      oily: "92.9",
    },
    {
      reference: "DCS00280007062220220223702",
      type: "B",
      quantity: "25,900.00 kg",
      origin: "MADRID",
      date: "10/08/2022",
      oily: "96",
    },
    {
      reference: "DCS01180000517020220501442",
      type: "B",
      quantity: "24,680.00 kg",
      origin: "GRANADA",
      date: "10/08/2022",
      oily: "92.9",
    },
    {
      reference: "DCS00460001447720220216880",
      type: "B",
      quantity: "25,100.00 kg",
      origin: "VALENCIA",
      date: "04/08/2022",
      oily: "92.3",
    },
  ];

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
          {tablaData.map((row, index) => (
            <tr key={index}>
              <td className="td__categories">
                {" "}
                <input type="checkbox" />
              </td>
              <td className="td__categories">{row.reference}</td>
              <td className="td__categories">{row.type}</td>
              <td className="td__categories">{row.quantity}</td>
              <td className="td__categories">{row.origin}</td>
              <td className="td__categories">{row.date}</td>
              <td className="td__categories">{row.oily}</td>
              <td className="td__categories">
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
              <td className="td__categories">
                <img src={dot} alt="swap" className="icon" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Table;
