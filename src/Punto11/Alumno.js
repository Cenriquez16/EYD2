import React, { useState } from "react";

function Alumno() {
  const [nombre, setNombre] = useState("");
  const [nota1, setNota1] = useState(0);
  const [nota2, setNota2] = useState(0);
  const [nota3, setNota3] = useState(0);

  const handleNombreChange = (event) => {
    setNombre(event.target.value);
  };

  const handleNota1Change = (event) => {
    setNota1(Number(event.target.value));
  };

  const handleNota2Change = (event) => {
    setNota2(Number(event.target.value));
  };

  const handleNota3Change = (event) => {
    setNota3(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const promedio = (nota1 + nota2 + nota3) / 3;
    const mensaje = promedio >= 3 ? "Gana la materia" : "No gana la materia";
    alert(`${nombre} - ${mensaje}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nombre:
        <input type="text" value={nombre} onChange={handleNombreChange} />
      </label>
      <br />
      <label>
        Nota 1:
        <input type="number" value={nota1} onChange={handleNota1Change} />
      </label>
      <br />
      <label>
        Nota 2:
        <input type="number" value={nota2} onChange={handleNota2Change} />
      </label>
      <br />
      <label>
        Nota 3:
        <input type="number" value={nota3} onChange={handleNota3Change} />
      </label>
      <br />
      <button type="submit">Calcular</button>
    </form>
  );
}

export default Alumno;
