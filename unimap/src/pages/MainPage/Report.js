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
import './Report.css';

import photo from './../../Assets/photo.png';


const divStyle = {
    display: 'flex',
    alignItems: 'center'
  };
const Report = () => {  
    const positionRedIcon = [State.redIcon.lat, State.redIcon.lng];
    const positionGreenIcon = [State.greenIcon.lat, State.greenIcon.lng];
    const positionOrangeIcon = [State.orangeIcon.lat, State.orangeIcon.lng];
    return(
        <div style={divStyle}>
            <Container>
                <Col>
                    <text>
                    <h2>Localización</h2>
                    </text>
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
                    <text>                  
                        <h2>Identificador del espacio</h2>
                    </text>
                    <text><textarea type="text" name="name" id="name"  cols="70" rows="7"/></text>
                    </Col>
                    </Container>
                    <Container>
                    <Col>
                    <anothertext><h2>Descripción
                        </h2>
                    </anothertext>
                    <description>
                    <textarea type="text" name="name" id="name"  cols="70" rows="10"/>
                    </description>
                    <anothertext><h2>Email
                        </h2>
                    </anothertext>
                    <anothertext>
                        <textarea type="text" name="name" id="name"  cols="70" rows="3"/>
                    </anothertext>
                    <div style={divStyle}>
                        <image><img src={photo} />
                    </image>
                    <buttonReport>
                        <input type="submit" value="       Enviar       " size="20" />
                        </buttonReport>                    
                    </div>                    
                    </Col>
                    </Container>
                    
                    </div>
                   
    );
}

export default Report;