import React from "react";


class SaludoHora extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      hora: "",
      saludo: "",
    };
    this.handleChangeNombre = this.handleChangeNombre.bind(this);
    this.handleChangeHora = this.handleChangeHora.bind(this);
  }

  handleChangeNombre(event) {
    this.setState({ nombre: event.target.value });
  }

  handleChangeHora(event) {
    this.setState({ hora: event.target.value }, this.actualizarSaludo);
  }

  actualizarSaludo() {
    const { nombre, hora } = this.state;
    let saludo = "";
    if (hora >= 1 && hora < 12) {
      saludo = `Buenos días, ${nombre}`;
    } else if (hora >= 12 && hora < 20) {
      saludo = `Buenas tardes, ${nombre}`;
    } else {
      saludo = `Buenas noches, ${nombre}`;
    }
    this.setState({ saludo });
  }

  render() {
    return (
      <div>
        <label>
          Nombre:
          <input type="text" value={this.state.nombre} onChange={this.handleChangeNombre} />
        </label>
        <br />
        <label>
          Hora:
          <input type="number" value={this.state.hora} onChange={this.handleChangeHora} />
        </label>
        <br />
        <p>{this.state.saludo}</p>
      </div>
    );
  }
}

export default SaludoHora;
