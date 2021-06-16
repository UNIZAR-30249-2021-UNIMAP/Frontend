import React, { useState } from "react";
import { Col, FormControl, Row } from "react-bootstrap";
import { Checkbox } from '@material-ui/core';

import { MapContainer } from 'react-leaflet';
import { TileLayer } from 'react-leaflet';
import { Marker } from 'react-leaflet';
import { Popup } from 'react-leaflet';

import { State } from './Data'
import { GreenIcon } from './Data'
import { RedIcon } from './Data'
import { OrangeIcon } from './Data'
import './Report.css';
import './Select.css';

import FormControlLabel from '@material-ui/core/FormControlLabel';

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";


const divStyle = {
    display: 'flex',
    alignItems: 'center'
};
const Reserve = () => {
    const positionRedIcon = [State.redIcon.lat, State.redIcon.lng];
    const positionGreenIcon = [State.greenIcon.lat, State.greenIcon.lng];
    const positionOrangeIcon = [State.orangeIcon.lat, State.orangeIcon.lng];
    const [startDate, setStartDate] = useState(new Date());
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
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            showTimeSelect
                            dateFormat="Pp" />
                    </Col>
                    <Col>
                        <text>
                            <h2>Fecha fin</h2>
                        </text>
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            showTimeSelect
                            dateFormat="Pp" />
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
                    <MapContainer className="mapMedium" center={positionGreenIcon} zoom={State.zoom}>
                        <TileLayer
                            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </MapContainer>

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
                                <input type="submit" value="       Reservar espacio       " size="20" />
                            </buttonReserve>
                        </div>
                    </Col>
                </div>
            </Row>

        </Col>
    );
}

export default Reserve;