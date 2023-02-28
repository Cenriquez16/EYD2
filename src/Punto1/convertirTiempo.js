import React from "react";
import ConvertidorTiempo from "./ConvertidorTiempo";

class convertirTiempo extends React.Component {
  render() {
    return (
      <div>
        <ConvertidorTiempo segundos={7021345} />
        <ConvertidorTiempo segundos={43121} />
        <ConvertidorTiempo segundos={7325} />
      </div>
    );
  }
}

export default convertirTiempo;
