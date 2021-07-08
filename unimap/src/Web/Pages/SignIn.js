import React, { useState } from "react";
import '../Styles/SignUp.css';
import { Login } from "../../Utils/Endpointscalls";

export default function SignIn() {
  var [correo, setEmail] = useState("");
  var [pass, setPass] = useState("");

  const handleButton = async e => {
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
        <button onClick={handleButton} style={{ backgroundColor: "#FE4880" }}> Login </button>
        <div className="form-group">
          <a className="meh" href="/signup">
            <br />
            <label >¿No tienes cuenta? Regístrate </label>
          </a>
        </div>
      </div>
    </form>
  )
}