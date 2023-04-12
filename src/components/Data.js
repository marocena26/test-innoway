//components
import Search from "./Search";
import DataBase from "./DataBase";
import Table from "./Table";

//styles
import "../styles/components/Data.scss";

function Data() {
  return (
    <>
      <section className="section__data">
        <Search></Search>
        <DataBase></DataBase>
        <Table></Table>
      </section>
    </>
  );
}

export default Data;
