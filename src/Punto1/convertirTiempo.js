import React from "react";
import ConvertidorTiempo from "./Punto1/ConvertidorTiempo";

class App extends React.Component {
  render() {
    return (
      <div>
        <ConvertidorTiempo segundos={36000} />
        <ConvertidorTiempo segundos={3661} />
        <ConvertidorTiempo segundos={7325} />
      </div>
    );
  }
}

export default App;
