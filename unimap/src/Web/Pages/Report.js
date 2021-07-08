import React, { useState } from "react";
import { Col, Container } from "react-bootstrap";

import { useMapEvents } from 'react-leaflet'
import { Marker, Popup } from 'react-leaflet'
import { MarkerIcon } from '../../Utils/react-leaflet-icon.js'
import proj4 from "proj4"
import '../Styles/Report.css';

import Map from "../../Utils/map"

import photo from './../../Assets/photo.png';
import { getNameClass } from "../../Utils/Endpointscalls";

const epsg = "+proj=utm +zone=30 +ellps=GRS80 +towgs84=0,0,0,0,0,0,0 +units=m +no_defs"
const PLANTA_CALLE = 'proyecto:adap00,proyecto:torresp00,proyecto:betanp00'
const PLANTA1 = 'proyecto:adap01,proyecto:torresp01,proyecto:betanp01'
const PLANTA2 = 'proyecto:adap02,proyecto:torresp02,proyecto:betanp02'
const PLANTA3 = 'proyecto:adap03,proyecto:torresp03,proyecto:betanp03'
const PLANTA4 = 'proyecto:adap04'
const SOTANO1 = 'proyecto:adas01,proyecto:torress01,proyecto:betans01'

const divStyle = {
  display: 'flex',
  alignItems: 'center'
};
const Report = () => {
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [idEspacio, setIdEspacio] = useState("Seleccione un espacio")

  function AddMarkerToClick() {

    const [markers, setMarkers] = useState({ lat: -34.397, lng: 150.644 });
    const [layer, setLayer] = useState("");

    const map = useMapEvents({
      click(e) {
        var planta;
        const newMarker = e.latlng;
        var lat = e.latlng.lat;
        var lng = e.latlng.lng;
        console.log("El marker está: " + newMarker)
        newMarker.lat = newMarker.lat + 0.00015
        newMarker.lng = newMarker.lng - 0.000065
        //console.log("El marker está: "+newMarker)
        setMarkers(newMarker);
        var res = proj4(epsg, [lng, lat]);
        console.log("Coordenadas: " + res)
        //var longitud = e.latlng.lng * 675734.506429 / -0.88853
        //var latitud = e.latlng.lat * 4616708.96398/ 41.68314
        switch (layer) {
          case "Planta calle":
            planta = PLANTA_CALLE
            break;
          case "Planta 1":
            planta = PLANTA1
            break;
          case "Planta 2":
            planta = PLANTA2
            break;
          case "Planta 3":
            planta = PLANTA3
            break;
          case "Planta 4":
            planta = PLANTA4
            break;
          case "Sótano 1":
            planta = SOTANO1
            break;
          default:
            planta = PLANTA_CALLE
            break;
        }
        getNameClass(planta, res);
      },
    })

    map.on('baselayerchange', function (e) {
      const currentLayerID = e.layer.getAttribution();
      setLayer(currentLayerID);
    });


    return (
      <>
        <Marker position={markers} icon={MarkerIcon}>
          <Popup> <var>{idEspacio}</var></Popup>
        </Marker>
      </>
    )
  }

  const handleButton = async e => {
    e.preventDefault();
    console.log("El email es" + email + " y la descripción es " + description)
    //TODO: MIRAR SUBIR IMAGENES
    Report(email, description, Map.idEspacio);
  }
  return (

    <div style={divStyle}>
      {Map("mapSmall")}
      <Col>
        <anothertext><h2>Descripción
        </h2>
        </anothertext>
        <description>
          <textarea type="text" name="name" id="name" cols="70" rows="10" size="50" value={description} onChange={e => setDescription(e.target.value)} />
        </description>
        <anothertext><h2>Email
        </h2>
        </anothertext>
        <anothertext>
          <input type="text" name="name" id="name" cols="70" rows="10" size="50" value={email} onChange={e => setEmail(e.target.value)} />
        </anothertext>
        <div style={divStyle}>
          <image><img src={photo} />
          </image>
          <buttonReport>
            <input type="submit" value="       Enviar       " size="20" onClick={handleButton} />
          </buttonReport>
        </div>
      </Col>

    </div >
  );


}

export default Report;