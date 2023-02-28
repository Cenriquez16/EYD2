import React from "react";
import CalculadoraLlamada from "./CalculadoraLlamada";

class CalcularCostoLLamada extends React.Component {
  render() {
    return (
      <div>
        <CalculadoraLlamada duracion={2} />
        <CalculadoraLlamada duracion={3} />
        <CalculadoraLlamada duracion={5} />
      </div>
    );
  }
}

export default CalcularCostoLLamada;
