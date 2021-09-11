import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Checkbox } from '@material-ui/core';
import { List, ListItem, ListItemText } from '@material-ui/core';
import swal from 'sweetalert';
import Map from "../../Utils/map"

import '../Styles/Reporte.css';
import '../Styles/Selector.css';

import FormControlLabel from '@material-ui/core/FormControlLabel';

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { ObtenerEspacios, ReservarEspacio } from "../../Utils/Endpoints";

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

const divStyle = {
    display: 'flex',
    alignItems: 'center'
};

var proyector = "true"
var edificio = "ada"
var tipoSala = "AULA"
var email = ""
var edificioReserva = ""

const Reserva = () => {
    const [fechaInicio, setFechaInicio] = useState(null);
    const [fechaFin, setFechaFin] = useState(null);
    const [listaEspacios, setListaEspacios] = useState([])
    const [listaEspaciosMostrados, setListaEspaciosMostrados] = useState([])
    const [espacioMostrar, setEspacioMostrar] = useState("Selecciona espacio");
    const [espacioClick, setEspacioClick] = useState("");
    

    const handlerFiltroProyector = element => {
        console.log("entro filtro")
        proyector = element;
    }
    const handlerFiltroEdificio = element => {
        console.log("entro filtro")
        edificio = element;
    }
    const handlerFiltroEspacio = element => {
        console.log("entro filtro")
        tipoSala = element;
    }

    function parsearFecha(date) {
        var aux = JSON.stringify(date)
        aux = aux.split("T")
        var fecha = aux[0]+" "+aux[1]
        return fecha.replace(/['"]+/g, '')
    }

    const handleFiltroClick = element => async e => {
        var fechaYDia = parsearFecha(fechaInicio)
        var fechaYDiaFin = parsearFecha(fechaFin)
        ObtenerEspacios(proyector, edificio, tipoSala, fechaYDia, fechaYDiaFin).then(res => {
            console.log("datos obtener espacios: ")
            console.log(JSON.stringify(res.data))
            if (!res.data) {
                //console.log("Error")
                swal({
                    title: "Error",
                    text: "No se ha podido realizar la operacion",
                    icon: "error"
                });
            } else {
                console.log("res.data" + res.data)
                var array = []
                res.data.forEach(function (item) {
                    array.push(JSON.parse(JSON.stringify(item)))
                })
                setListaEspacios(array)
                setListaEspaciosMostrados(array)
            }
        })
    }

    const handleEspacioClick = element => async e => {
        setEspacioMostrar("Espacio seleccionado: " + element.idEspacio);
        setEspacioClick(element.idEspacio);
        edificioReserva = edificio
    }

    const handleReservaClick = element => async e => {
        var fechaYDia = parsearFecha(fechaInicio)
        var fechaYDiaFin = parsearFecha(fechaFin)
        var espacioParseado = espacioClick.split('.')
        espacioParseado = espacioParseado[2] + "." + espacioParseado[3]
        if(fechaYDiaFin > fechaYDia){
            ReservarEspacio(edificioReserva, espacioParseado, email, fechaYDia, fechaYDiaFin)
        } else {
            swal({
                title: "Error",
                text: "No se ha podido realizar la operacion, comprueba los datos introducidos",
                icon: "error"
            });
        }
        
    }

    return (

        <Col>
            <Row>
                <div style={divStyle}>

                    <dropdown style={{ marginLeft: '30px' }}>
                        <div class="sidebar-box"><select id="proyector" onChange={e => handlerFiltroProyector(e.target.value)}>
                            <option value="true">Con proyector</option>
                            <option value="false">Sin proyector</option>
                            <option value="">Indiferente</option>
                        </select></div>

                    </dropdown>

                    <dropdown style={{ marginLeft: '10px' }}>
                        <div class="sidebar-box"><select id="edificio" onChange={e => handlerFiltroEdificio(e.target.value)}>
                            <option value="ada">Ada Byron</option>
                            <option value="torres">Torres Quevedo</option>
                            <option value="betan">Betancourt</option>
                            <option value="">Indiferente</option>
                        </select></div>
                    </dropdown>

                    <dropdown style={{ marginLeft: '10px' }}>
                        <div class="sidebar-box"><select id="tipoSala" onChange={e => handlerFiltroEspacio(e.target.value)}>
                            <option value="AULA">Aula</option>
                            <option value="LAB">Laboratorio</option>
                            <option value="DESPACHO">Despacho</option>
                            <option value="SEMINARIO">Seminario</option>
                        </select></div>
                    </dropdown>
                    
                    <Col style={{ marginLeft: '10px' }}>
                        <text>
                            <h2 style={{ color: 'white' }}>Fecha inicio</h2>
                        </text>
                        <DatePicker
                            selected={fechaInicio}
                            onChange={(date) => setFechaInicio(date)}
                            showTimeSelect
                            dateFormat="Pp" />
                    </Col>
                    <Col>
                        <text>
                            <h2 style={{ color: 'white' }}>Fecha fin</h2>
                        </text>
                        <DatePicker
                            selected={fechaFin}
                            onChange={(date) => setFechaFin(date)}
                            showTimeSelect
                            dateFormat="Pp" />
                    </Col>
                    <input type="submit" value="       Filtrar       " size="20" onClick={handleFiltroClick()}/>
                </div>
            </Row>
            <Row>
                <div style={divStyle}>
                    <Row style={scrollboxStryle}>
                            <List>
                                {listaEspaciosMostrados.map((element) =>
                                    <ListItem button onClick={handleEspacioClick(element)}>
                                        <ListItemText primary={element.idEspacio} secondary={element.edificio + "     " + element.tipoDeEspacio} />
                                    </ListItem>
                                )}
                            </List>
                        </Row>

                    <Col style={{ marginLeft: '-100px' }}>
                        
                        <anothertext>
                            <h2 style={{ color: 'white' }}>Nombre completo</h2>
                        </anothertext>
                        <anothertext>
                            <textarea type="text" name="name" id="name" cols="40" rows="2" />
                        </anothertext>
                        <anothertext>
                            <h2 style={{ color: 'white' }}>Email</h2>
                        </anothertext>
                        <anothertext>
                            <textarea type="text" name="email" id="name" cols="40" rows="2" onChange={e => email = e.target.value}/>
                        </anothertext>
                        <div style={divStyle}>
                            <Col>
                                <anothertext><h2 style={{ color: 'white' }}>Nº Teléfono</h2>
                                </anothertext>
                                <anothertext>
                                    <input type="tel" name="name" id="name" cols="12" rows="2" />
                                </anothertext>
                            </Col>
                             <Col>   
                             <h3 style={{ color: "white" }}>{espacioMostrar}</h3>   
                            <buttonReserve>
                                <input type="submit" onClick={handleReservaClick()} value="       Reservar espacio       " size="20" />
                            </buttonReserve>
                            </Col>
                        </div>
                    </Col>
                </div>
            </Row>

        </Col>
    );
}

export default Reserva;