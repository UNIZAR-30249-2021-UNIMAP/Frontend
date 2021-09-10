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
const Reserva = () => {
    const [fechaInicio, setFechaInicio] = useState(null);
    const [fechaFin, setFechaFin] = useState(null);
    const [listaEspacios, setListaEspacios] = useState([1, 2])
    const [listaEspaciosMostrados, setListaEspaciosMostrados] = useState([1, 2])
    const [espacioMostrar, setEspacioMostrar] = useState("Selecciona espacio");
    const [espacioClick, setEspacioClick] = useState("");
    var proyector = ""
    var edificio = ""
    var planta = ""
    var tipoSala = ""
    var email = ""
    var idSala = ""

    const handlerFiltroProyector = element => async e => {
        console.log("entro filtro")
        proyector = element;
    }
    const handlerFiltroEdificio = element => async e => {
        console.log("entro filtro")
        edificio = element;
    }
    const handlerFiltroPlanta = element => async e => {
        console.log("entro filtro")
        planta = element;
    }
    const handlerFiltroEspacio = element => async e => {
        console.log("entro filtro")
        tipoSala = element;
    }

    const handleFiltroClick = element => async e => {
        ObtenerEspacios(proyector, edificio, planta, tipoSala, fechaInicio, fechaFin).then(res => {
            console.log("datos obtener espacios: ")
            console.log(res.data)
            if (!res.data) {
                //console.log("Error")
                swal({
                    title: "Error",
                    text: "No se a podidio realizar la operacion",
                    icon: "error"
                });
            } else {
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
        setEspacioMostrar("Espacio seleccionado: " +element);
        setEspacioClick(element.id);
    }
    const handleReservaClick = element => async e => {
        ReservarEspacio(espacioClick, email, fechaInicio, fechaFin)
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
                        </select></div>
                    </dropdown>

                    <dropdown style={{ marginLeft: '10px' }}>
                        <div class="sidebar-box"><select id="planta" onChange={e => handlerFiltroPlanta(e.target.value)}>
                            <option value="">Planta 0</option>
                            <option value="">Planta 1</option>
                            <option value="">Planta 2</option>
                            <option value="">Indiferente</option>
                        </select></div>
                    </dropdown>

                    <dropdown style={{ marginLeft: '10px' }}>
                        <div class="sidebar-box"><select id="tipoSala" onChange={e => handlerFiltroEspacio(e.target.value)}>
                            <option value="">Aula</option>
                            <option value="">Laboratorio</option>
                        </select></div>
                    </dropdown>
                    <Col style={{ marginLeft: '70px' }}>
                        <text>
                            <h2 style={{ color: 'white' }}>Aforo mínimo</h2>
                        </text>
                        <text>
                            <textarea type="text" name="name" id="name" cols="15" rows="1" />
                        </text>
                    </Col>
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
                    <input type="submit" value="       Filtrar       " size="20" onClick={e => handleFiltroClick()}/>
                </div>
            </Row>
            <Row>
                <div style={divStyle}>
                    <Row style={scrollboxStryle}>
                            <List>
                                {listaEspaciosMostrados.map((element) =>
                                    <ListItem button onClick={handleEspacioClick(element)}>
                                        <ListItemText primary={element} />
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
                            <textarea type="email" name="name" id="name" cols="40" rows="2" pattern=".+@.\.com" />
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
                                <input type="submit" onSubmit={handleReservaClick()} value="       Reservar espacio       " size="20" />
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