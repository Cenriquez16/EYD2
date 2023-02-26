import React from "react";

class ConvertidorTiempo extends React.Component {
  convertidorSegundos(segundos) {
    const horas = Math.floor(segundos / 3600);
    const minutos = Math.floor((segundos % 3600) / 60);
    const segundosRestantes = segundos % 60;
    return `${horas} horas, ${minutos} minutos, ${segundosRestantes} segundos`;
  }

  render() {
    const { segundos } = this.props;
    return (
      <div>
        <h3>Tiempo en segundos: {segundos}</h3>
        <p>Tiempo convertido: {this.convertidorSegundos(segundos)}</p>
      </div>
    );
  }
}

export default ConvertidorTiempo;
