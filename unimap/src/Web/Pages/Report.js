import React, { useState } from "react";
import { Col } from "react-bootstrap";

import '../Styles/Report.css';

import Map from "../../Utils/map"

import photo from './../../Assets/photo.png';

const divStyle = {
  display: 'flex',
  alignItems: 'center'
};
const Report = () => {
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");

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
          <image><img src={photo} alt=""/>
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