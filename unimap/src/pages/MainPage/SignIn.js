import React, { useState } from "react";
import './SignUp.css';
import login from './controllers';
import axios from 'axios'
function handleButton(correo, pass){
  console.log("email "+correo)
  axios.request({
    url: 'http://localhost:7000/login?email='+correo+'&contrasena='+pass,
    method: 'post',
    data: {
        'email': correo,
        'contrasena': pass,
    },

})
    .then(res => {
      const persons = res.data;
      console.log("El endpoint nos devuelve: "+res.data)
    })
  }
export default function SignIn() {
  var [correo, setEmail] =useState("");
  var [pass, setPass] = useState("");

    
  return(
    <form>
      <div className="form-inner">
        <h2>Login</h2>
        {/* ERROR! */}
        <div className="form-group">
          <label >Email: </label>
          <input type="email" value={correo} onChange={e => setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña: </label>
          <input type="password" value={pass} onChange={e => setPass(e.target.value)}/>
        </div>
        <input type="submit" value="LOGIN" onClick={handleButton(correo, pass)}/>
        <div className="form-group">
        <a className="meh" href="/signup">
        <br/>
        <label >¿No tienes cuenta? Regístrate </label>
        </a>
        </div>
      </div>
    </form>
  )
}