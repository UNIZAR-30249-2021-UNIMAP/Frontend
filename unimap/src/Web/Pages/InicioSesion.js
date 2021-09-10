import React, { useState } from "react";
import '../Styles/Registro.css';
import { Login } from "../../Utils/Endpoints";
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";


export default function InicioSesion() {
  var [correo, setEmail] = useState("");
  var [pass, setPass] = useState("");
  const nuevaPagina = useHistory()


  const botonLogin = async e => {
    e.preventDefault();
    Login(correo, pass).then(res => {
      if (!res.data || JSON.stringify(res.data) == "-1") {
        console.log("Error")
        swal({
          title: "Error",
          text: "Usuario o contraseña incorrectos.",
          icon: "error"
        });
      } else {
        console.log("El endpoint nos devuelve: " + JSON.stringify(res.data))
        if (JSON.stringify(res.data) == "1")
          nuevaPagina.push('/');
        else if (JSON.stringify(res.data) == "2")
          nuevaPagina.push('/AsignarTareas');
        else
          nuevaPagina.push('/EmpleadoMantenimiento');
      }
    })

  }

  return (
    <form>
      <div className="form-inner">
        <h2>Login</h2>
        {/* ERROR! */}
        <div className="form-group">
          <label >Email: </label>
          <input type="email" value={correo} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña: </label>
          <input type="password" value={pass} onChange={e => setPass(e.target.value)} />
        </div>
        <button onClick={botonLogin} style={{ backgroundColor: "#7200a7", color: 'whitesmoke', borderRadius: '4px' }}> Login </button>
        <div className="form-group">
          <a className="meh" href="/Registro">
            <br />
            <label >¿No tienes cuenta? Regístrate </label>
          </a>
        </div>
      </div>
    </form>
  )
}