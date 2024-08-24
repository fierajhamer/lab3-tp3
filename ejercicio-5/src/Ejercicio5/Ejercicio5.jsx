import { useEffect, useState } from "react";
import "./Ejercicio5.css";

export default function Ejercicio5() {
  const [usuarios, setUsuarios] = useState([]);
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  const [tareas, setTareas] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsuarios(data);
      })
      .catch(() => {
        console.error("Error en la consulta de usuarios");
      });
  }, []);

  const handleMostrarTareas = (userId) => {
    setUsuarioSeleccionado(userId);
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}/todos`)
      .then((response) => response.json())
      .then((data) => {
        setTareas(data);
      })
      .catch(() => {
        console.error("Error en la consulta de tareas");
      });
  };

  return (
    <>
      <div className="main-container">
        <h2>Ejercicio 5</h2>
        <div className="Ejercicio5-container">
          <div className="usuarios-container">
            <ul>
              {usuarios.map((usuario) => (
                <li key={usuario.id}>
                  <p>{usuario.name}</p>
                  <button onClick={() => handleMostrarTareas(usuario.id)}>
                    Ver tareas
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="tareas-container">
            {usuarioSeleccionado && (
              <div>
                <h3>Tareas</h3>
                <ul>
                  {tareas.map((tarea) => (
                    <li key={tarea.id} style={{textDecoration: tarea.completed ? "line-through" : "none"}}>
                      {tarea.title}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
