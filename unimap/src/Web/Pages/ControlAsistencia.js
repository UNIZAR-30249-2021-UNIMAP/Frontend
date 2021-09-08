import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import swal from 'sweetalert';

import '../Styles/Report.css';
import '../Styles/Select.css';

import "react-datepicker/dist/react-datepicker.css";
import { AceptarIncidencia, RechazarIncidencia } from "../../Utils/Endpoints";
import { Button } from 'antd';

const ControlAsistencia = () => {

    const botonConfirmar = async e => {
        e.preventDefault();
        swal({
            title: "Asistencia confirmada",
            icon: "success",
            button: true
          })
    }

    return (
        <form>
        <div className="form-inner">
            <text color="white">
                <h2>Identifícate para controlar el aforo</h2>
            </text>
            <Row>
                <div >
                <h>NIP      </h>
                <textarea color="black" type="text" name="name" id="name" cols="20" rows="1" />
                </div>
            </Row>
            <Button onClick={botonConfirmar}>Confirmar</Button>
        </div>
        </form>
    );
}



export default ControlAsistencia;