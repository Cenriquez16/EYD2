import React, { useState } from "react";

const Arreglo = () => {
  const [numbers, setNumbers] = useState(
    Array.from({ length: 10 }, () => Math.floor(Math.random() * 100))
  );
  const [dividerIndex, setDividerIndex] = useState("");

  const divideNumbers = () => {
    if (isNaN(dividerIndex) || dividerIndex < 0 || dividerIndex > 9) {
      alert("Debe ingresar un índice válido");
      return;
    }
    const divider = numbers[dividerIndex];
    const dividedNumbers = numbers.map((number) => number / divider);

    alert(`Números divididos: ${dividedNumbers}`);
  };

  return (
    <div>
      <h1>Arreglo de números aleatorios:</h1>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}>{number}</li>
        ))}
      </ul>
      <input
        type="number"
        placeholder="Ingrese el índice para el divisor"
        onChange={(e) => setDividerIndex(Number(e.target.value))}
      />
      <button onClick={divideNumbers}>Dividir números</button>
    </div>
  );
};

export default Arreglo;
