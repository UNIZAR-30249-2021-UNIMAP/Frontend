import React, { useState } from "react";
import './SignUp.css';
import login from './controllers';

export default function SignIn() {
  const [email, setEmail] ="";
  const [pass, setPass] = "";

  function handleButton(){
    var newUser = {
      email: email,
			contrasena: pass, 
		}
    console.log("El new user es" +newUser);
		login(newUser).then(data =>{
			console.log("Data de registro: "+data);
            if(data != "Error"){
		          	console.log("Éxito!")
            }else{
                console.log("Error!")
            }
		}).catch(err => {
		  console.log("error pantalla login")
		  console.log(err)
		  return "error"
		});
  }
  return(
    <form>
      <div className="form-inner">
        <h2>Login</h2>
        {/* ERROR! */}
        <div className="form-group">
          <label htmlFor="email">Email: </label>
          <input type="email" name="email" id="email" value={email} onChange={setEmail}/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña: </label>
          <input type="password" name="pwassword" id="password" value={pass} onChange={setPass}/>
        </div>
        <input type="submit" value="LOGIN" onClick={handleButton()}/>
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