import React, { useState } from "react";

const Matriz = () => {
  const [matrix, setMatrix] = useState([]);

  const handleMatrixSize = (event) => {
    const n = parseInt(event.target.value);
    const m = parseInt(event.target.name);
    const newMatrix = Array.from({ length: n }, () => Array.from({ length: m }, () => Math.floor(Math.random() * 10)));
    setMatrix(newMatrix);
  };

  const getColumnSum = (colIndex) => {
    return matrix.reduce((total, row) => {
      return total + row[colIndex];
    }, 0);
  };

  return (
    <div>
      <h2>Tabla de matriz</h2>
      <label>
        Filas:
        <input type="number" name="cols" min="1" max="10" onChange={handleMatrixSize} />
      </label>
      <label>
        Columnas:
        <input type="number" name="rows" min="1" max="10" onChange={handleMatrixSize} />
      </label>
      <table>
        <tbody>
          {matrix.map((row, rowIndex) => (
            <tr key={`row-${rowIndex}`}>
              {row.map((value, colIndex) => (
                <td key={`cell-${rowIndex}-${colIndex}`}>
                  {value}
                </td>
              ))}
            </tr>
          ))}
          <tr>
            {matrix[0] && matrix[0].map((_, colIndex) => (
              <td key={`col-sum-${colIndex}`}>
                {getColumnSum(colIndex)}
              </td>
              
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Matriz;
