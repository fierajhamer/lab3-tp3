import { useState } from "react";
import "./Ejercicio2.css";

export default function Ejercicio2() {
  const [peso, setPeso] = useState(0);
  const [estatura, setEstatura] = useState(0);
  const [IMC, setIMC] = useState(0);

  const handleCalcularIMC = (event) => {
    event.preventDefault();
    if (peso == 0 || estatura == 0 || peso.length > 4 || estatura > 250) {
      setIMC("Error, verifique los datos ingresados");
    } else {
      setIMC((parseInt(peso) / (parseInt(estatura) / 100) ** 2).toFixed(2));
    }
  };

  return (
    <>
      <div className="Ejercicio2-container">
        <h2>Ejercicio 2</h2>

        <form>
          <p>Peso en kg</p>
          <input
            required
            type="number"
            value={peso}
            onChange={(event) => setPeso(event.target.value)}
          />

          <p>Estatura en cm</p>
          <input
            required
            type="number"
            value={estatura}
            onChange={(event) => setEstatura(event.target.value)}
          />

          <button type="submit" onClick={handleCalcularIMC}>
            Calcular IMC
          </button>
        </form>
        <h3>IMC: {IMC}</h3>
        <ResultadosIMC imc={IMC} />
      </div>
    </>
  );
}

function ResultadosIMC(prop) {
  return (
    <>
      {prop.imc == 0 && <p></p>}
      {prop.imc > 0 && prop.imc < 18.5 && (
        <p style={{ backgroundColor: "yellow" }}>Nivel de IMC: Bajo</p>
      )}
      {prop.imc >= 18.5 && prop.imc < 25 && (
        <p style={{ backgroundColor: "green" }}>Nivel de IMC: Normal</p>
      )}
      {prop.imc >= 25 && prop.imc < 30 && (
        <p style={{ backgroundColor: "orange" }}>Nivel de IMC: Sobrepreso</p>
      )}
      {prop.imc >= 30 && <p style={{ backgroundColor: "red" }}>Nivel de IMC: Obesidad</p>}
    </>
  );
}
