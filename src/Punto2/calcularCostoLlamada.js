import React from "react";
import CalculadoraLlamadas from "./CalculadoraLlamadas";

class App extends React.Component {
  render() {
    return (
      <div>
        <CalculadoraLlamadas duracion={2} />
        <CalculadoraLlamadas duracion={3} />
        <CalculadoraLlamadas duracion={5} />
      </div>
    );
  }
}

export default App;
