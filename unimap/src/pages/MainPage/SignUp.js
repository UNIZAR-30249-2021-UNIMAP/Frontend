import React, { useState } from "react";
import './SignUp.css';
import { Register } from "../Endpointscalls";




export default function SignUp() {

  var [correo, setEmail] = useState("");
  var [pass, setPass] = useState("");
  var [usuario, setUsuario] = useState("");
  const [startDate, setStartDate] = useState(new Date());


  const handleButton = async e => {
    e.preventDefault();
    Register(correo, pass, usuario);
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
        <button onClick={handleButton} style={{ backgroundColor: "#FE4880" }}> Registrarse </button>
        <div className="form-group">
          <a className="meh" href="/signin">
            <br />
            <label >¿Ya tienes cuenta? Inicia sesión </label>
          </a>
        </div>
      </div>
    </form>
  )
}