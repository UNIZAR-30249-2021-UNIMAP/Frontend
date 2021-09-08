import React, { Component } from "react";
import './App.css';
import NavBar from "./Components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom"
import { Route } from "react-router-dom"
import { Switch } from "react-router-dom"
import { Redirect } from "react-router-dom"

//Pages
import Inicio from "./Web/Pages/Inicio";
import NotFoundPage from "./Web/Pages/404";
import Registro from "./Web/Pages/Registro"
import InicioSesion from "./Web/Pages/InicioSesion"
import Reporte from "./Web/Pages/Reporte"
import Reserva from "./Web/Pages/Reserva"
import AsignarTareas from "./Web/Pages/AsignarTareas"
import EmpleadoMantenimiento from "./Web/Pages/EmpleadoMantenimiento"
import AsignarCapacidad from "./Web/Pages/AsignarCapacidad";
import ControlAsistencia from "./Web/Pages/ControlAsistencia";

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <BrowserRouter >
          <Switch>
            <Route exact path="/" component={Inicio} />
            <Route exact path="/404" component={NotFoundPage} />
            <Route exact path="/Registro" component={Registro} />
            <Route exact path="/InicioSesion" component={InicioSesion} />
            <Route exact path="/Reporte" component={Reporte} />
            <Route exact path="/Reserva" component={Reserva} />
            <Route exact path="/AsignarTareas" component={AsignarTareas} />
            <Route exact path="/EmpleadoMantenimiento" component={EmpleadoMantenimiento} />
            <Route exact path="/AsignarCapacidad" component={AsignarCapacidad} />
            <Route exact path="/ControlAsistencia" component={ControlAsistencia} />
            <Redirect to={"/404"} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}
