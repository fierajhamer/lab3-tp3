import { useState } from "react";
import "./Ejercicio1.css";

export default function Ejercicio1() {
  const [b1State, setB1State] = useState(false);
  const [b2State, setB2State] = useState(true);
  const [b3State, setB3State] = useState(true);
  const [b4State, setB4State] = useState(true);

  const handleSetB1State = () => {
    setB1State(true);
    setB2State(false);
  };

  const handleSetB2State = () => {
    setB2State(true);
    setB3State(false);
  };

  const handleSetB3State = () => {
    setB3State(true);
    setB4State(false);
  };

  const handleSetB4State = () => {
    setB4State(true);
    setB1State(false);
  };

  return (
    <>
      <div className="Ejercicio1-container">
        <h2>Ejercicio 1</h2>
        <button disabled={b1State} onClick={handleSetB1State}>Botón 1</button>
        <div className="buttons-mid">
          <button disabled={b4State} onClick={handleSetB4State}>Botón 4</button>
          <button disabled={b2State} onClick={handleSetB2State}>Botón 2</button>
        </div>
        <button disabled={b3State} onClick={handleSetB3State}>Botón 3</button>
      </div>
    </>
  );
}
