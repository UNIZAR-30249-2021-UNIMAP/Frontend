import React, { useState } from "react";
import { Registrarse } from "../../Utils/Endpoints";
import '../Styles/Registro.css';
import swal from 'sweetalert';
import { useHistory } from "react-router-dom";





export default function Registro() {

  var [correo, setEmail] = useState("");
  var [pass, setPass] = useState("");
  var [usuario, setUsuario] = useState("");
  const nuevaPagina = useHistory()

  const handleButton = async e => {
    e.preventDefault();
    Registrarse(correo, pass, usuario).then(res => {
      if (!res.data) {
        console.log("Error")
        swal({
          title: "Error",
          text: "Usuario o correo ya existe.",
          icon: "error"
        });
      } else {
        console.log("El endpoint nos devuelve: " + res.data)
        nuevaPagina.push('/InicioSesion');
      }
    })
  }
  return (
    <form>
      <div className="form-inner">
        <h2>Registro</h2>
        {/* ERROR! */}
        <div className="form-group">
          <label htmlFor="name">Nombre de usuario:</label>
          <input type="text" name="name" value={usuario} onChange={e => setUsuario(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" value={correo} onChange={e => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña: </label>
          <input type="password" name="pwassword" value={pass} onChange={e => setPass(e.target.value)} />
        </div>
        <button onClick={handleButton} style={{ backgroundColor: "#7200a7", color: 'whitesmoke', borderRadius: '4px' }}> Registrarse </button>
        <div className="form-group">
          <a className="meh" href="/InicioSesion">
            <br />
            <label >¿Ya tienes cuenta? Inicia sesión </label>
          </a>
        </div>
      </div>
    </form>
  )
}