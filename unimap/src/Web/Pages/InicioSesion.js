import React, { useState } from "react";
import '../Styles/SignUp.css';
import { Login } from "../../Utils/Endpoints";

export default function InicioSesion() {
  var [correo, setEmail] = useState("");
  var [pass, setPass] = useState("");

  const botonLogin = async e => {
    e.preventDefault();
    Login(correo, pass)
    
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
        <button onClick={botonLogin} style={{ backgroundColor: "#FE4880" }}> Login </button>
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