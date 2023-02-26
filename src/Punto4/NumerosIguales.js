import React from "react";

class NumerosIguales extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numero1: "",
      numero2: "",
      numero3: "",
      iguales: "",
    };
    this.handleChangeNumero1 = this.handleChangeNumero1.bind(this);
    this.handleChangeNumero2 = this.handleChangeNumero2.bind(this);
    this.handleChangeNumero3 = this.handleChangeNumero3.bind(this);
    this.determinarIguales = this.determinarIguales.bind(this);
  }

  handleChangeNumero1(event) {
    this.setState({ numero1: event.target.value }, this.determinarIguales);
  }

  handleChangeNumero2(event) {
    this.setState({ numero2: event.target.value }, this.determinarIguales);
  }

  handleChangeNumero3(event) {
    this.setState({ numero3: event.target.value }, this.determinarIguales);
  }

  determinarIguales() {
    const { numero1, numero2, numero3 } = this.state;
    let iguales = 0;
    if (numero1 === numero2) {
      iguales++;
    }
    if (numero1 === numero3) {
      iguales++;
    }
    if (numero2 === numero3) {
      iguales++;
    }
    this.setState({ iguales });
  }

  render() {
    return (
      <div>
        <label>
          Número 1:
          <input type="number" value={this.state.numero1} onChange={this.handleChangeNumero1} />
        </label>
        <br />
        <label>
          Número 2:
          <input type="number" value={this.state.numero2} onChange={this.handleChangeNumero2} />
        </label>
        <br />
        <label>
          Número 3:
          <input type="number" value={this.state.numero3} onChange={this.handleChangeNumero3} />
        </label>
        <br />
        <p>Hay {this.state.iguales} número(s) iguales.</p>
      </div>
    );
  }
}

export default NumerosIguales;
