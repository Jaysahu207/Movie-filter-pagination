import DataTable from "react-data-table-component";
import "./App.css";
import { data } from "./assets/data";
import { useState } from "react";

const columns = [
  {
    name: "S.no",
    selector: (row) => row.id,
  },
  {
    name: "Title",
    selector: (row) => row.title,
  },
  {
    name: "Director",
    selector: (row) => row.director,
  },

  {
    name: "Year",
    selector: (row) => row.year,
    sortable: true,
  },
  {
    name: "Action",
    selector: (row) => row.action,
  },
];
const customStyles = {
  headCells: {
    style: {
      backgroundColor: "gray",

      fontSize: "17px",
      fontWeight: "bolder",
    },
  },
};
const style = {
  padding: "1rem 10rem",
};

function App() {
  const [record, setRecord] = useState(data);

  const handleChange = (e) => {
    let query = e.target.value;
    const newrecords = data.filter(
      (item) =>
        item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase()) ||
        item.year.toString().includes(query) ||
        item.director.toLocaleLowerCase().includes(query.toLocaleLowerCase())
    );

    setRecord(newrecords);
  };
  return (
    <div className="" style={style}>
      <div className="search">
        <h2>Movies List</h2>

        <input
          type="text"
          className="inp"
          placeholder="Search By year"
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp"
          placeholder="Search By Director"
          onChange={handleChange}
        />
        <input
          type="text"
          className="inp"
          placeholder="Search By title"
          onChange={handleChange}
        />
      </div>
      <DataTable
        columns={columns}
        data={record}
        customStyles={customStyles}
        pagination
      />
    </div>
  );
}

export default App;
