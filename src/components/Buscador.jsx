import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


const tablaParamos = [
  { año: "2000", campeon: "Real Madrid CF", subcampeon: "Valencia CF" },
  {paramos: "Inicio"}
  
];

class Buscador extends React.Component {
  state = {
    busqueda: "",
    paramos: [],
  };

  onChange = async (e) => {
    e.persist();
    await this.setState({ busqueda: e.target.value });
    console.log(this.state.busqueda);
  };
  filtrarElementos = () => {
    var search = tablaParamos.filter((item) => {
      if (
        item.año.toString().includes(this.state.busqueda) ||
        item.campeon
          .toLowerCase()
          .normalize("NFD")
          .replace(/[\u0300-\u036f]/g, "")
          .includes(this.state.busqueda) ||
        item.subcampeon.toLowerCase().includes(this.state.busqueda)
      ) {
        return item;
      }
    });
    this.setState({ campeones: search });
  };

  componentDidMount() {
    this.setState({ campeones: tablaParamos });
  }
  render() {
    return (
      <div className="barraBusqueda">
        <input
          type="text"
          placeholder="Buscar"
          className="textField"
          name="busqueda"
          value={this.state.busqueda}
          onChange={this.onChange}
        />
        <button type="button" className="btnBuscar" /*onClick={onClear}*/>
          {" "}
          <FontAwesomeIcon icon={faSearch} />
        </button>
      </div>
    );
  }
}

export default Buscador;
