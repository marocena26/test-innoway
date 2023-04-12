//react libraries

//components

//images

//styles
import "../styles/components/Search.scss";

function Search() {
  return (
    <section>
      <form action="" className="section__form">
        <div className="section__form--wrap">
          <label className="section__form--wrap--label" htmlFor="">
            Filtrar
          </label>
          <select className="section__form--wrap--select">
            <option value="">Escoge una opción</option>
            <option value="">01/08/2022 - 31/08/2022</option>
            <option value="">01/09/2022 - 31/09/2022 </option>
            <option value="">01/010/2022 - 31/010/2022</option>
          </select>
        </div>
        <div className="section__form--wrap btn">
          <button className="section__form--wrap--btn">Ene</button>
          <button className="section__form--wrap--btn">Feb</button>
          <button className="section__form--wrap--btn">Mar</button>
          <button className="section__form--wrap--btn">Abr</button>
          <button className="section__form--wrap--btn">May</button>
          <button className="section__form--wrap--btn">Jun</button>
          <button className="section__form--wrap--btn">Jul</button>
          <button className="section__form--wrap--btn">Ago</button>
          <button className="section__form--wrap--btn">Sep</button>
          <button className="section__form--wrap--btn">Oct</button>
          <button className="section__form--wrap--btn">Nov</button>
          <button className="section__form--wrap--btn">Dic</button>
        </div>
        <div className="section__form--wrap">
          <input
            className="section__form--wrap--input"
            type="text"
            name="search"
            id="search"
            placeholder=" Buscar"
          />
        </div>
      </form>
    </section>
  );
}

export default Search;
