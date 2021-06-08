import React, { useState } from "react";
import './SignUp.css';
import swal from 'sweetalert';
import axios from 'axios'

export default function SignIn() {
  var [correo, setEmail] =useState("");
  var [pass, setPass] = useState("");

  const handleButton = async e =>{
    e.preventDefault();
    console.log("email "+correo)
    const response = axios.request({
      url: 'http://localhost:7000/login?email='+correo+'&contrasena='+pass,
      method: 'get',
      data: {
          'email': correo,
          'contrasena': pass,
      },
  }).then(res => {
        if(!res.data){
          console.log("Error")
          swal({
            title: "Error",
            text: "Usuario o contraseña incorrectos.",
            icon: "error"
          });
        }else{
          console.log("El endpoint nos devuelve: "+res.data)
        }
      })
      console.log(response)
    }
    
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
        <button onClick={handleButton}style={{backgroundColor: "#FE4880"} }> Login </button>
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