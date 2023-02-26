import React from "react";

class OrdenarNumeros extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numeros: [],
      nuevoNumero: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ nuevoNumero: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { numeros, nuevoNumero } = this.state;
    const nuevaLista = [...numeros, parseInt(nuevoNumero)];
    nuevaLista.sort(function (a, b) {
      return a - b;
    });
    this.setState({ numeros: nuevaLista, nuevoNumero: "" });
  }

  render() {
    const { numeros, nuevoNumero } = this.state;
    const numerosOrdenados = numeros.map((numero) => <li key={numero}>{numero}</li>);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nuevo número:
            <input type="number" value={nuevoNumero} onChange={this.handleChange} />
          </label>
          <button type="submit">Agregar</button>
        </form>
        <p>Números ordenados:</p>
        <ul>{numerosOrdenados}</ul>
      </div>
    );
  }
}

export default OrdenarNumeros;
