import React from "react";
import './SignUp.css';

export default function SignUp() {
  return(
    <form>
      <div className="form-inner">
        <h2>Registro</h2>
        {/* ERROR! */}
        <div className="form-group">
          <label htmlFor="name">Nombre:</label>
          <input type="text" name="name" id="name"/>
        </div>
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email"/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña: </label>
          <input type="password" name="pwassword" id="passwors"/>
        </div>
        <input type="submit" value="Registrarse" />
        <div className="form-group">
        <a className="meh" href="/signin">
          <br/>
        <label >¿Ya tienes cuenta? Inicia sesión </label>
        </a>
        </div>
      </div>
    </form>
  )
}