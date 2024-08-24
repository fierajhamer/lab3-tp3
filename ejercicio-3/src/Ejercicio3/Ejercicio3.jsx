import { useState } from "react";
import "./Ejercicio3.css";

export default function Ejercicio3() {
  const [direction, setDirection] = useState("row");
  const [justify, setJustify] = useState("center");
  const [align, setAlign] = useState("center");

  return (
    <>
      <div className="Ejercicio3-container">
        <h2>Ejercicio 3</h2>

        <div className="select-container">
          <select id="direction" value={direction} onChange={(event) => setDirection(event.target.value)}>
            <option value="row">Fila</option>
            <option value="column">Columna</option>
          </select>

          <select id="justify" value={justify} onChange={(event) => setJustify(event.target.value)}>
            <option value="center">Centrado</option>
            <option value="flex-start">Al inicio</option>
            <option value="flex-end">Al final</option>
            <option value="space-between">Espacio entre cajas</option>
            <option value="space-around">Espacio alrededor</option>
          </select>

          <select id="align" value={align} onChange={(event) => setAlign(event.target.value)}>
            <option value="center">Centrado</option>
            <option value="flex-start">Al inicio</option>
            <option value="flex-end">Al final</option>
          </select>
        </div>

        <div className="boxes-container" style={{flexDirection: direction ,alignItems: align, justifyContent: justify}}>
          <div className="box" style={{backgroundColor: "red"}}></div>
          <div className="box" style={{backgroundColor: "yellow"}}></div>
          <div className="box" style={{backgroundColor: "blue"}}></div>
        </div>
      </div>
    </>
  );
}
