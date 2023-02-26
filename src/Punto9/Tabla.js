import React, { useState } from "react";

const Tabla = () => {
  const [numRows, setNumRows] = useState("");
  const [numCols, setNumCols] = useState("");

  const createTable = () => {
    if (isNaN(numRows) || isNaN(numCols) || numRows <= 0 || numCols <= 0) {
      alert("Debe ingresar valores numéricos positivos");
      return;
    }

    const rows = [];

    for (let i = 0; i < numRows; i++) {
      const cells = [];

      for (let j = 0; j < numCols; j++) {
        cells.push(
          <td key={`${i}-${j}`}>
            Fila {i + 1}, Columna {j + 1}
          </td>
        );
      }

      rows.push(<tr key={i}>{cells}</tr>);
    }

    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  };

  return (
    <div>
      <h1>Crear tabla</h1>
      <label htmlFor="numRows">Número de filas: </label>
      <input
        type="number"
        id="numRows"
        value={numRows}
        onChange={(e) => setNumRows(Number(e.target.value))}
      />
      <br />
      <label htmlFor="numCols">Número de columnas: </label>
      <input
        type="number"
        id="numCols"
        value={numCols}
        onChange={(e) => setNumCols(Number(e.target.value))}
      />
      <br />
      <button onClick={createTable}>Crear tabla</button>
      {createTable()}
    </div>
  );
};

export default Tabla;
