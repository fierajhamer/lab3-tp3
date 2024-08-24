import { useState } from "react"
import "./Ejercicio4.css"

export default function Ejercicio4() {
    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [edad, setEdad] = useState(0)
    const [estatura, setEstatura] = useState(0)
    const [email, setEmail] = useState("")

    const [estadoEnvio, setEstadoEnvio] = useState(false)

    const handleVerificarInputs = (event) => {
        event.preventDefault()
        if (nombre.length > 0 &&
            nombre.length < 50 &&
            apellido.length > 0 &&
            apellido.length < 50 &&
            parseInt(edad) >= 18 &&
            parseInt(estatura) > 0 &&
            parseInt(estatura) <= 230 &&
            email.includes("@")
        ) {
            setEstadoEnvio(true)
        } else {
            setEstadoEnvio(false)
        }
    }

    return(
        <>
        <div className="Ejercicio4-container">
            <h2>Ejercicio 4</h2>

            <form>
                <p>Nombre</p>
                <input type="text" value={nombre} onChange={(event) => setNombre(event.target.value)}/>

                <p>Apellido</p>
                <input type="text" value={apellido} onChange={(event) => setApellido(event.target.value)}/>
                
                <p>Edad</p>
                <input type="number" value={edad} onChange={(event) => setEdad(event.target.value)}/>
                
                <p>Estatura en cm</p>
                <input type="number" value={estatura} onChange={(event) => setEstatura(event.target.value)}/>
                
                <p>Correo electrónico</p>
                <input type="email"  value={email} onChange={(event) => setEmail(event.target.value)}/>

                <button type="submit" onClick={handleVerificarInputs}>Enviar</button>
            </form>
            <Envio estado={estadoEnvio} id="estadoEnvio"></Envio>
        </div>
        </>
    )

    function Envio(prop) {
        return (
            <>
            {prop.estado == true && <h3 style={{color: "green"}}>Envío correcto</h3>}
            {prop.estado == false && <h3 style={{color: "red"}}>Envío incorrecto</h3>}
            </>
        )
    }
}