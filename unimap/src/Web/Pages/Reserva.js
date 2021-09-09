import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Checkbox } from '@material-ui/core';

import Map from "../../Utils/map"

import '../Styles/Reporte.css';
import '../Styles/Selector.css';

import FormControlLabel from '@material-ui/core/FormControlLabel';

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";


const divStyle = {
    display: 'flex',
    alignItems: 'center'
};
const Reserva = () => {
    const [fechaInicio, setFechaInicio] = useState(null);
    const [fechaFin, setFechaFin] = useState(null);
    return (

        <Col>
            <Row>
                <div style={divStyle}>

                    <dropdown style={{ marginLeft: '30px' }}>
                        <div class="sidebar-box"><select id="equipo">
                            <option value="">Con proyector</option>
                            <option value="">Sin proyector</option>
                            <option value="">Indiferente</option>
                        </select></div>

                    </dropdown>

                    <dropdown style={{ marginLeft: '10px' }}>
                        <div class="sidebar-box"><select id="equipo">
                            <option value="">Ada Byron</option>
                            <option value="">Torres Quevedo</option>
                            <option value="">Betancourt</option>
                        </select></div>
                    </dropdown>

                    <dropdown style={{ marginLeft: '10px' }}>
                        <div class="sidebar-box"><select id="equipo">
                            <option value="">Planta 0</option>
                            <option value="">Planta 1</option>
                            <option value="">Planta 2</option>
                            <option value="">Indiferente</option>
                        </select></div>
                    </dropdown>

                    <dropdown style={{ marginLeft: '10px' }}>
                        <div class="sidebar-box"><select id="equipo">
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
                    <div style={{ color: 'white', marginLeft: '10px' }}>
                        <FormControlLabel
                            control={<Checkbox />}
                            label="Semanal"
                        />
                    </div>
                    <input type="submit" value="       Filtrar       " size="20" />
                </div>
            </Row>
            <Row>
                <div style={divStyle}>
                    {Map("mapMedium")}

                    <Col style={{ marginLeft: '-100px' }}>
                        <anothertext>
                            <h2 style={{ color: 'white' }}>Espacio </h2>
                        </anothertext>
                        <anothertext>
                            <textarea type="text" name="name" id="name" cols="40" rows="2" />
                        </anothertext>
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

                            <buttonReserve>
                                <input type="submit" onSubmit={console.log(fechaInicio)} value="       Reservar espacio       " size="20" />
                            </buttonReserve>
                        </div>
                    </Col>
                </div>
            </Row>

        </Col>
    );
}

export default Reserva;