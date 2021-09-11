import React, { useState, useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { List, ListItem, ListItemText } from '@material-ui/core';
import swal from 'sweetalert';

import '../Styles/Reporte.css';
import '../Styles/Selector.css';

import { useHistory } from "react-router-dom";


import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { AceptarIncidencia, RechazarIncidencia, ObtenerIncidencias, ObtenerCargaTrabajoEmpleadosMant } from "../../Utils/Endpoints";

const divStyle = {
    display: 'flex',
    alignItems: 'center'
};


var fechaClick;
var edificioClickado = "Todos";
var fechaComprobar;
var img = "iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApgAAAKYB3X3/OAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAANCSURBVEiJtZZPbBtFFMZ/M7ubXdtdb1xSFyeilBapySVU8h8OoFaooFSqiihIVIpQBKci6KEg9Q6H9kovIHoCIVQJJCKE1ENFjnAgcaSGC6rEnxBwA04Tx43t2FnvDAfjkNibxgHxnWb2e/u992bee7tCa00YFsffekFY+nUzFtjW0LrvjRXrCDIAaPLlW0nHL0SsZtVoaF98mLrx3pdhOqLtYPHChahZcYYO7KvPFxvRl5XPp1sN3adWiD1ZAqD6XYK1b/dvE5IWryTt2udLFedwc1+9kLp+vbbpoDh+6TklxBeAi9TL0taeWpdmZzQDry0AcO+jQ12RyohqqoYoo8RDwJrU+qXkjWtfi8Xxt58BdQuwQs9qC/afLwCw8tnQbqYAPsgxE1S6F3EAIXux2oQFKm0ihMsOF71dHYx+f3NND68ghCu1YIoePPQN1pGRABkJ6Bus96CutRZMydTl+TvuiRW1m3n0eDl0vRPcEysqdXn+jsQPsrHMquGeXEaY4Yk4wxWcY5V/9scqOMOVUFthatyTy8QyqwZ+kDURKoMWxNKr2EeqVKcTNOajqKoBgOE28U4tdQl5p5bwCw7BWquaZSzAPlwjlithJtp3pTImSqQRrb2Z8PHGigD4RZuNX6JYj6wj7O4TFLbCO/Mn/m8R+h6rYSUb3ekokRY6f/YukArN979jcW+V/S8g0eT/N3VN3kTqWbQ428m9/8k0P/1aIhF36PccEl6EhOcAUCrXKZXXWS3XKd2vc/TRBG9O5ELC17MmWubD2nKhUKZa26Ba2+D3P+4/MNCFwg59oWVeYhkzgN/JDR8deKBoD7Y+ljEjGZ0sosXVTvbc6RHirr2reNy1OXd6pJsQ+gqjk8VWFYmHrwBzW/n+uMPFiRwHB2I7ih8ciHFxIkd/3Omk5tCDV1t+2nNu5sxxpDFNx+huNhVT3/zMDz8usXC3ddaHBj1GHj/As08fwTS7Kt1HBTmyN29vdwAw+/wbwLVOJ3uAD1wi/dUH7Qei66PfyuRj4Ik9is+hglfbkbfR3cnZm7chlUWLdwmprtCohX4HUtlOcQjLYCu+fzGJH2QRKvP3UNz8bWk1qMxjGTOMThZ3kvgLI5AzFfo379UAAAAASUVORK5CYII="
var motivo;
var idEmpleado;
var prioridad = "NORMAL";

const scrollboxStryle = {
    overflowY: 'scroll',
    border: '1px solid red',
    width: '700px',
    float: 'left',
    height: '500px',
    position: 'relative',
    marginLeft: '20px',
    backgroundColor: 'white'

};

const AsignarIncidencias = () => {
    const [fechaInicio, setFechaInicio] = useState(new Date());
    const [listaIncidencias, setListaIncidencias] = useState([1, 2])
    const [listaIncidenciasMostrada, setListaIncidenciasMostrada] = useState([1, 2])
    const [listaPersonal, setListaPersonal] = useState([1, 2])
    const [idIncidenciaClick, setIncidenciaClick] = useState("");
    const [personalMostrar, setPersonalMostrar] = useState("Selecciona conserje");
    const [IncedenciaMostra, setIncedenciaMostra] = useState("Selecciona tarea");
    const nuevaPagina = useHistory()



    //const [fechaClick, setFechaClick] = useState();

    var listaBotones = listaIncidencias.map((Member) => {
        var keys = Object.keys(Member)
        var index = keys.indexOf("id");
        if (index > -1) {
            // removes the "id" element from the keys.
            keys.splice(index, 1);
        }
        var divs = keys.map(k => <td>{listaIncidencias[k]}</td>)
        return (
            <tr key={listaIncidencias.id}>
                divs
            </tr>
        )
    });

    function auxiliarFiltrado(obj) {
        var auxEdificio = (obj.idEspacio).split("p")
        console.log("fecha click=", fechaClick)
        if ((edificioClickado == "Todos" && fechaClick != "true"))
            return true;
        else if (auxEdificio[0].includes(edificioClickado) && fechaClick != "true")
            return true
        else if (edificioClickado == "Todos" && comprobarFechaIgual(fechaComprobar, obj.reportadoTimeStamp))
            return true;
        else if (auxEdificio[0].includes(edificioClickado) && comprobarFechaIgual(fechaComprobar, obj.reportadoTimeStamp))
            return true;
        else
            return false;
    }

    function filtrarlista() {
        setListaIncidenciasMostrada(listaIncidencias.filter(auxiliarFiltrado))
    }

    const controlFecha = date => {
        console.log("FECHA")
        fechaComprobar = date;
        console.log(fechaComprobar)
        fechaClick = "true";
        setFechaInicio(date);
        filtrarlista();
    }
    function comprobarFechaIgual(date, timeStamp) {
        var aux = JSON.stringify(date)
        aux = aux.split("T")
        aux[0] = aux[0].slice(1, aux[0].length)
        var jsonaux = timeStamp.split(" ")
        console.log("Sergio " + jsonaux[0])
        console.log("nuestro " + aux[0])
        return aux[0] == jsonaux[0];
    }

    const cambioEdificio = edificionuevo => {
        edificioClickado = edificionuevo;
        //console.log(edificio)
        filtrarlista();
    }

    const cambioPrioridad = prioridadNueva => {
        prioridad = prioridadNueva;
    }

    const handlerIncidenciaClick = element => async e => {
        console.log("entro incidencia")
        setIncedenciaMostra(element.descripcion);
        setIncidenciaClick(element.id);
    }

    const handlerPersonalClick = element => async e => {
        idEmpleado = element.id
        console.log(element.nombre)
        setPersonalMostrar(element.nombre)
        console.log(idEmpleado)
    }

    const handleButtonAccept = async e => {
        //e.preventDefault();
        console.log("prioridad: " + prioridad)
        AceptarIncidencia(idIncidenciaClick, idEmpleado, prioridad);
    }

    const handleButtonDeny = async e => {
        //e.preventDefault();
        swal({
            title: "Determina el motivo del rechazo",
            content: "input",
            buttons: true
        }).then((value) => {
            motivo = value
            RechazarIncidencia(idIncidenciaClick, motivo);
        });;
    }

    async function cogerDatos() {
        //e.preventDefault();
        ObtenerIncidencias().then(res => {
            console.log("datos obtener incidencias: ")
            console.log(res.data)
            if (!res.data) {
                //console.log("Error")
                swal({
                    title: "Error",
                    text: "No se a podidio realizar la operacion",
                    icon: "error"
                });
            } else {
                //console.log("Informacion sin tratar" + res.data)
                //console.log("Informacion try sin tratar" + res.data)
                //console.log("Info espacio devueltas: " + JSON.stringify(res.data))
                var array = []
                res.data.forEach(function (item) {
                    array.push(JSON.parse(JSON.stringify(item)))
                })
                setListaIncidencias(array)
                setListaIncidenciasMostrada(array)
            }
        }
        );
        ObtenerCargaTrabajoEmpleadosMant().then(res => {
            if (!res.data) {
                console.log("Error")
                swal({
                    title: "Error",
                    text: "No se a podidio realizar la operacion",
                    icon: "error"
                });
            } else {
                //console.log("Informacion sin tratar" + res.data)
                //console.log("Informacion try sin tratar" + res.data)
                //console.log("Info espacio devueltas: " + JSON.stringify(res.data))
                var array = []
                res.data.forEach(function (item) {
                    console.log("personal devuelto: " + JSON.stringify(item))
                    array.push(JSON.parse(JSON.stringify(item)))
                })
                setListaPersonal(array)
            }
        }
        );
    }

    useEffect(() => {
        cogerDatos();
    }, []);

    return (
        <div style={divStyle}>
            <Col>
                <Row style={{ marginLeft: "100px" }}>
                    <div style={divStyle}>
                        <Col>
                            <h3 style={{ color: 'white', marginTop: "20px" }}>Edificio</h3>
                            <dropdown>
                                <div class="sidebar-box"><select id="Edificio" onChange={e => cambioEdificio(e.target.value)}>
                                    <option selected value="Todos"> Todos </option>
                                    <option value="ada">Ada Byron</option>
                                    <option value="torres">Torres Quevedo</option>
                                    <option value="betan">Betancourt</option>
                                </select>
                                </div>
                            </dropdown>
                        </Col>
                        <Col>
                            <text>
                                <h3 style={{ color: 'white', marginTop: "10px" }}>Fecha del reporte</h3>
                            </text>
                            <DatePicker
                                selected={fechaInicio}
                                onChange={(date) => controlFecha(date)}
                                dateFormat="dd/MM/yyyy" />
                        </Col>
                    </div>

                </Row>
                <Row>

                    <Col>
                        <Row>
                            <h2 style={{ color: 'white', marginTop: "20px" }}>INCIDENCIAS</h2>
                        </Row>
                        <Row style={scrollboxStryle}>
                            <List>
                                {listaIncidenciasMostrada.map((element) =>
                                    <ListItem button onClick={handlerIncidenciaClick(element)}>
                                        <ListItemText primary={element.descripcion} />
                                        <img src={element.imagen} />
                                    </ListItem>
                                )}
                            </List>
                        </Row>
                    </Col>

                </Row >
            </Col >
            <Col>
                <Row>
                    <h2 style={{ color: 'white', marginTop: "120px" }}>PERSONAL</h2>
                </Row>
                <Row>
                    <div style={divStyle}>
                        <Row style={scrollboxStryle}>
                            <List>
                                {listaPersonal.map((element) =>
                                    <ListItem button onClick={handlerPersonalClick(element)}>
                                        <ListItemText primary={element.nombre} secondary={"Tareas normales: " + element.tareasNormales + "   " + "Tareas urgentes: " + element.tareasUrgentes} />
                                    </ListItem>
                                )}
                            </List>
                        </Row>
                    </div>
                </Row>
            </Col>
            <Row>
                <Col>
                    <h3 style={{ color: 'white', marginTop: "20px" }}>Determina la prioridad</h3>
                    <dropdown>
                        <div class="sidebar-box"><select id="prioridad"  onChange={e => cambioPrioridad(e.target.value)}>
                            <option value="NORMAL">NORMAL</option>
                            <option value="URGENTE">URGENTE</option>
                        </select></div>
                    </dropdown>
                </Col>
                <Col style={{ marginTop: "40px" }}>
                    <h3 style={{ color: "white" }}>{personalMostrar}</h3>
                    <h3 style={{ color: "white" }}>{IncedenciaMostra}</h3>
                </Col>
                <Col style={{ marginTop: "40px" }}>
                    <input style={{ marginLeft: "40px" }} type="submit" value="       Aceptar       " size="20" onClick={handleButtonAccept} />
                    <input style={{ marginLeft: "40px" }} type="submit" value="       Rechazar      " size="20" onClick={handleButtonDeny} />
                </Col>
                <Col style={{ marginTop: "500px", marginLeft: "200px" }}>
                    <input type="submit" value="       Cambiar aforos       " size="20" onClick={e => nuevaPagina.push('/AsignarCapacidad')} />
                </Col>

            </Row>
        </div>
    );
}

export default AsignarIncidencias;