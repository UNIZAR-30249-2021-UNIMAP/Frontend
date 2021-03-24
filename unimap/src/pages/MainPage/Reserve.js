import React from "react";
import { Col, Container, Dropdown, Row } from "react-bootstrap";

import {MapContainer} from 'react-leaflet';
import {TileLayer} from 'react-leaflet'; 
import {Marker} from 'react-leaflet'; 
import {Popup} from 'react-leaflet'; 

import {State} from './Data'
import {GreenIcon} from './Data'
import {RedIcon} from './Data'
import {OrangeIcon} from './Data'
import './Report.css';

const divStyle = {
    display: 'flex',
    alignItems: 'center'
  };
const Reserve = () => {  
    const positionRedIcon = [State.redIcon.lat, State.redIcon.lng];
    const positionGreenIcon = [State.greenIcon.lat, State.greenIcon.lng];
    const positionOrangeIcon = [State.orangeIcon.lat, State.orangeIcon.lng];
    return(
        
        <Col>
        <Row>
        <div style={divStyle}>
            <Col><text>                  
                        <h2>Aforo mínimo</h2>
                    </text>
                    <text>
                        <textarea type="text" name="name" id="name"  cols="15" rows="2"/>
                    </text>
            </Col>
            <dropdown>
            <Dropdown> <Dropdown.Toggle variant="success" id="dropdown-basic">
                Proyector
            </Dropdown.Toggle>

            <Dropdown.Menu>
           
                <Row> <dropdownItem><Dropdown.Item href="#/action-1">Sí</Dropdown.Item></dropdownItem></Row>
                <Row><dropdownItem><Dropdown.Item href="#/action-2">No</Dropdown.Item></dropdownItem></Row>
                <Row><dropdownItem><Dropdown.Item href="#/action-3">Indiferente</Dropdown.Item></dropdownItem></Row>
            </Dropdown.Menu>
            </Dropdown>
            </dropdown>
            
            <dropdown>
            <Dropdown> <Dropdown.Toggle variant="success" id="dropdown-basic">
                Edificio
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Row><dropdownItem><Dropdown.Item href="#/action-1">Ada Byron</Dropdown.Item></dropdownItem></Row>
                <Row><dropdownItem><Dropdown.Item href="#/action-2">Torres Quevedo</Dropdown.Item></dropdownItem></Row>
                <Row><dropdownItem><Dropdown.Item href="#/action-3">Betancourt</Dropdown.Item></dropdownItem></Row>
            </Dropdown.Menu></Dropdown>
            </dropdown>

            <dropdown>
            <Dropdown> <Dropdown.Toggle variant="success" id="dropdown-basic">
                Planta
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Row><dropdownItem><Dropdown.Item href="#/action-1">0</Dropdown.Item></dropdownItem></Row>
                <Row><dropdownItem><Dropdown.Item href="#/action-2">1</Dropdown.Item></dropdownItem></Row>
                <Row><dropdownItem><Dropdown.Item href="#/action-3">2</Dropdown.Item></dropdownItem></Row>
                <Row><dropdownItem><Dropdown.Item href="#/action-3">Indiferente</Dropdown.Item></dropdownItem></Row>                
            </Dropdown.Menu></Dropdown>
            </dropdown>

            <dropdown>
            <Dropdown> <Dropdown.Toggle variant="success" id="dropdown-basic">
                Tipo de sala
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Row><dropdownItem><Dropdown.Item href="#/action-1">Aula</Dropdown.Item></dropdownItem></Row>
            <Row><dropdownItem><Dropdown.Item href="#/action-2">Laboratorio</Dropdown.Item></dropdownItem></Row>
            </Dropdown.Menu></Dropdown>
            </dropdown>
            </div>
            </Row>
            <Row>
            <div style={divStyle}> 
                <MapContainer className="mapMedium" center={positionGreenIcon} zoom={State.zoom}>
                    <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={positionGreenIcon} icon={GreenIcon}>
                        <Popup>
                        I am a green leaf
                        </Popup>
                    </Marker>
                    <Marker position={positionRedIcon} icon={RedIcon}>
                        <Popup>
                        I am a red leaf
                        </Popup>
                    </Marker>
                    <Marker position={positionOrangeIcon} icon={OrangeIcon}>
                        <Popup>
                        I am an orange leaf
                        </Popup>
                    </Marker>
                </MapContainer>

                <Col>
                    <anothertext><h2>Espacio
                        </h2>
                    </anothertext>
                    <anothertext>
                    <textarea type="text" name="name" id="name"  cols="40" rows="2"/>
                    </anothertext>
                    <anothertext><h2>Nombre completo
                        </h2>
                    </anothertext>
                    <anothertext>
                        <textarea type="text" name="name" id="name"  cols="40" rows="2"/>
                    </anothertext>
                    <anothertext><h2>Email
                        </h2>
                    </anothertext>
                    <anothertext>
                        <textarea type="text" name="name" id="name"  cols="40" rows="2"/>
                    </anothertext>
                    <div style={divStyle}>
                        <Col>
                            <anothertext><h2>Nº Teléfono
                            </h2>
                            </anothertext>
                            <anothertext>
                                <textarea type="text" name="name" id="name"  cols="10" rows="2"/>
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