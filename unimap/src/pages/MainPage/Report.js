import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import {MapContainer} from 'react-leaflet';
import {TileLayer} from 'react-leaflet'; 
import {Marker} from 'react-leaflet'; 
import {Popup} from 'react-leaflet'; 

import {State} from './Data'
import {GreenIcon} from './Data'
import {RedIcon} from './Data'
import {OrangeIcon} from './Data'


const Report = () => {  
    const positionRedIcon = [State.redIcon.lat, State.redIcon.lng];
    const positionGreenIcon = [State.greenIcon.lat, State.greenIcon.lng];
    const positionOrangeIcon = [State.orangeIcon.lat, State.orangeIcon.lng];
    return(
        <Container>
            <Row>
                <Col>
                    <Row>
                    <h2>Localizacion</h2>
                    <br/>
                    <MapContainer className="mapSmall" center={positionGreenIcon} zoom={State.zoom}>
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
                    </Row>
                    <Row>

                    </Row>
                </Col>
                <Col>
                    <Row>

                    </Row>
                    <Row>

                    </Row>
                    <Row>
                        <Col>
                        </Col>
                        <Col>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default Report;