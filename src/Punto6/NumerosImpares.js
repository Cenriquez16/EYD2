import React from "react";

class NumerosImpares extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: "",
      impares: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ numero: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { numero } = this.state;
    let impares = [];
    for (let i = 1; i < numero; i++) {
      if (i % 2 !== 0) {
        impares.push(i);
      }
    }
    this.setState({ impares: impares });
  }

  render() {
    const { numero, impares } = this.state;
    const listaImpares = impares.map((impar) => <li key={impar}>{impar}</li>);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Número:
            <input type="number" value={numero} onChange={this.handleChange} />
          </label>
          <button type="submit">Imprimir impares</button>
        </form>
        <p>Impares menores que {numero}:</p>
        <ul>{listaImpares}</ul>
      </div>
    );
  }
}

export default NumerosImpares;
