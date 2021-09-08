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
                    <Col><text>
                        <h2>Aforo mínimo</h2>
                    </text>
                        <text>
                            <textarea type="text" name="name" id="name" cols="15" rows="2" />
                        </text>
                    </Col>
                    <dropdown>
                        <div class="sidebar-box"><select id="equipo">
                            <option value="">Con proyector</option>
                            <option value="">Sin proyector</option>
                            <option value="">Indiferente</option>
                        </select></div>

                    </dropdown>

                    <dropdown>
                        <div class="sidebar-box"><select id="equipo">
                            <option value="">Ada Byron</option>
                            <option value="">Torres Quevedo</option>
                            <option value="">Betancourt</option>
                        </select></div>
                    </dropdown>

                    <dropdown>
                        <div class="sidebar-box"><select id="equipo">
                            <option value="">Planta 0</option>
                            <option value="">Planta 1</option>
                            <option value="">Planta 2</option>
                            <option value="">Indiferente</option>
                        </select></div>
                    </dropdown>

                    <dropdown>
                        <div class="sidebar-box"><select id="equipo">
                            <option value="">Aula</option>
                            <option value="">Laboratorio</option>
                        </select></div>
                    </dropdown>
                    <Col>
                        <text>
                            <h2>Fecha inicio</h2>
                        </text>
                        <DatePicker
                            selected={fechaInicio}
                            onChange={(date) => setFechaInicio(date)}
                            showTimeSelect
                            dateFormat="Pp" />
                    </Col>
                    <Col>
                        <text>
                            <h2>Fecha fin</h2>
                        </text>
                        <DatePicker
                            selected={fechaFin}
                            onChange={(date) => setFechaFin(date)}
                            showTimeSelect
                            dateFormat="Pp"/>
                    </Col>
                    <FormControlLabel
                        control={<Checkbox />}
                        label="Semanal"
                    />
                    <input type="submit" value="       Filtrar       " size="20" />
                </div>
            </Row>
            <Row>
                <div style={divStyle}>
                    {Map("mapMedium")}

                    <Col>
                        <anothertext><h2>Espacio
                        </h2>
                        </anothertext>
                        <anothertext>
                            <textarea type="text" name="name" id="name" cols="40" rows="2" />
                        </anothertext>
                        <anothertext><h2>Nombre completo
                        </h2>
                        </anothertext>
                        <anothertext>
                            <textarea type="text" name="name" id="name" cols="40" rows="2" />
                        </anothertext>
                        <anothertext><h2>Email
                        </h2>
                        </anothertext>
                        <anothertext>
                            <textarea type="text" name="name" id="name" cols="40" rows="2" />
                        </anothertext>
                        <div style={divStyle}>
                            <Col>
                                <anothertext><h2>Nº Teléfono
                                </h2>
                                </anothertext>
                                <anothertext>
                                    <textarea type="text" name="name" id="name" cols="10" rows="2" />
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