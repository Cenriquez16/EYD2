import React from "react";

function Estudiantes(props) {

  const calcularEstado = (notas) => {
    const promedio = (notas[0] + notas[1] + notas[2]) / 3;
    return promedio >= 3 ? "Aprobado" : "Reprobado";
  };

  return (
    <div>
      <h2>Estudiantes:</h2>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Nota 1</th>
            <th>Nota 2</th>
            <th>Nota 3</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {props.estudiantes.map((estudiante, index) => (
            <tr key={index}>
              <td>{estudiante.nombre}</td>
              <td>{estudiante.notas[0]}</td>
              <td>{estudiante.notas[1]}</td>
              <td>{estudiante.notas[2]}</td>
              <td>{calcularEstado(estudiante.notas)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Estudiantes;
