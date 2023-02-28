import React from "react";

class CalculadoraLlamada extends React.Component {
  calcularCostoLlamadas(duracion) {
    let costoLlamada = 0;
    if (duracion <= 3) {
      costoLlamada = 100;
    } else {
      const minutosAdicionales = duracion - 3;
      costoLlamada = 100 + minutosAdicionales * 50;
    }
    return costoLlamada;
  }

  render() {
    const { duracion } = this.props;
    const costoLlamada = this.calcularCostoLlamadas(duracion);
    return (
      <div>
        <h3>Duración de la llamada: {duracion} minutos</h3>
        <p>Costo de la llamada: {costoLlamada} pesos</p>
      </div>
    );
  }
}

export default CalculadoraLlamada;
