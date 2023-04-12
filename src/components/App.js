//react libraries
import { Route, Routes } from "react-router-dom";

//components

import Header from "./Header";
import Declaraciones from "./Declaraciones";
import Financiacion from "./Financiacion";
import Incidencias from "./Incidencias";
import Informes from "./Informes";
import Inicio from "./Inicio";
import Instalaciones from "./Instalaciones";

//styles
import "../styles/App.scss";

function App() {
  return (
    <>
      <Header></Header>
      <main className="main">
        <Routes>
          <Route path="/" element={<Declaraciones />} />
          <Route path="/Inicio" element={<Inicio />} />
          <Route path="/Instalaciones" element={<Instalaciones />} />
          <Route path="/Incidencias" element={<Incidencias />} />
          <Route path="/Financiacion" element={<Financiacion />} />
          <Route path="/Informes" element={<Informes />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
