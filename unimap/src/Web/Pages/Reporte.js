import React, { useState } from "react";
import { Col } from "react-bootstrap";

import '../Styles/Report.css';

import Map from "../../Utils/map"

import photo from './../../Assets/photo.png';
import { TextField } from "@material-ui/core";
import { ReportarIncidencia } from "../../Utils/Endpoints";

const divStyle = {
  display: 'flex',
  alignItems: 'center'
};
const Reporte = () => {
  const [descripcion, setDescripcion] = useState("");
  const [email, setEmail] = useState("");
  const [base64TextString, setBase64] = useState("");

  const botonEnviar = async e => {
    e.preventDefault();
    console.log("El email es" + email + " y la descripción es " + descripcion)
    //TODO: MIRAR SUBIR IMAGENES
    ReportarIncidencia(email, descripcion, Map.idEspacio);
  }
  async function onChange(e) {
    let archivo = e.target.files[0];
    if (archivo) {
      console.log(await toBase64(archivo));
    }
  }
  const toBase64 = archivo => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(archivo);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
  });

  return (
    <div style={divStyle}>
      {Map("mapSmall")}
      <Col>
        <anothertext><h2>Descripción
        </h2>
        </anothertext>
        <description>
          <textarea type="text" name="name" id="name" cols="70" rows="10" size="50" value={descripcion} onChange={e => setDescripcion(e.target.value)} />
        </description>
        <anothertext><h2>Email
        </h2>
        </anothertext>
        <anothertext>
          <input type="text" name="name" id="name" cols="70" rows="10" size="50" value={email} onChange={e => setEmail(e.target.value)} />
        </anothertext>
        <input onChange={(e) => onChange(e)}
          type="file"
          name="image"
          id="file"
          accept=".jpeg, .png. ,jpg"
        />
        <input type="submit" />
        <div style={divStyle}>
          <buttonReport>
            <input type="submit" value="       Enviar       " size="20" onClick={botonEnviar} />
          </buttonReport>
        </div>
      </Col>

    </div >
  );


}

export default Reporte;