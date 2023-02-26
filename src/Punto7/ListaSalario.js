import React, { useState } from "react";

const ListaSalario = () => {
  const [salaries, setSalaries] = useState([]);

  const addSalary = (salary) => {
    if (salaries.length < 10) {
      setSalaries([...salaries, salary]);
    } else {
      alert("Solo se pueden ingresar 10 salarios");
    }
  };

  const increaseSalaries = () => {
    if (salaries.length < 10) {
      alert("Debe ingresar exactamente 10 salarios");
      return;
    }

    const increasedSalaries = salaries.map((salary) => salary * 1.08);

    alert(`Salarios con aumento: ${increasedSalaries}`);
  };

  return (
    <div>
      <h1>Ingrese 10 salarios</h1>
      <ul>
        {salaries.map((salary, index) => (
          <li key={index}>{salary}</li>
        ))}
      </ul>
      <input
        type="number"
        placeholder="Ingrese un salario"
        onChange={(e) => addSalary(Number(e.target.value))}
      />
      <button onClick={increaseSalaries}>Aumentar salarios</button>
    </div>
  );
};

export default ListaSalario;
