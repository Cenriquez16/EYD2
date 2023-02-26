import React from "react";
import Estudiantes from "./Estudiantes";

function App() {
  const estudiantes = [
    { nombre: "Juan", notas: [3.5, 4, 2.5] },
    { nombre: "Ana", notas: [2, 2.5, 3] },
    { nombre: "Pedro", notas: [4, 3.5, 4] },
  ];

  return (
    <div>
      <Estudiantes estudiantes={estudiantes} />
    </div>
  );
}

export default App;
