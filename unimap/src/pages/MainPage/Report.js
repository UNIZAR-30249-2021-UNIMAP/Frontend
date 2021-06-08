import React,  { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import {MapContainer} from 'react-leaflet';
import {TileLayer} from 'react-leaflet'; 
import { useMapEvents } from 'react-leaflet'
import { Marker, Popup } from 'react-leaflet'
import { MarkerIcon } from './react-leaflet-icon.js'

import {State} from './Data'
import './Report.css';

import photo from './../../Assets/photo.png';

function AddMarkerToClick() {

  const [markers, setMarkers] = useState({ lat: -34.397, lng: 150.644 });
  const [layer, setLayer] = useState("");

  const map = useMapEvents({
    click(e) {
      const newMarker = e.latlng;
      setMarkers(newMarker);
      console.log("El markador es: " +newMarker);
      console.log("La capa final es" +layer); 
    },
  })

  map.on('baselayerchange', function (e) {
    const currentLayerID = e.layer.getAttribution();    
    setLayer(currentLayerID);         
 });

  return (
    <>
        <Marker position={markers} icon={MarkerIcon}>          
        </Marker>
    </>
  )
}

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
                        <AddMarkerToClick></AddMarkerToClick>
                        <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                    </MapContainer>  
                    <text>                  
                        <h2>Identificador del espacio</h2>
                    </text>
                    <text><textarea type="text" name="name" id="name"  cols="70" rows="7" disabled="true"/></text>
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