import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { List, ListItem, ListItemText } from '@material-ui/core';

import '../Styles/Report.css';
import '../Styles/Select.css';

import Map from "../../Utils/map"

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";

const divStyle = {
    display: 'flex',
    alignItems: 'center'
};
const EmpleadoMantenimiento = () => {
    //const [List, setLista] = useState([])
    const [fechaInicio, setFechaInicio] = useState(new Date());
    const [lista, setLista] = useState([1, 2])
    const [idEmpleado, setIdEmpleado] = useState("");
    const [idReporte, setIdReporte] = useState("");
    const [prio, setPrio] = useState("");
    const [motivo, setMotivo] = useState("");

    const botonFinalizar = async e => {
        e.preventDefault();
        //EndTask(idReport);
    }

    return (
        <div style={divStyle}>
            <Col>
                <Row>
                    <div style={divStyle}>
                        <Col>
                            <dropdown>
                                <div class="sidebar-box"><select id="Orden">
                                    <option selected disabled> Orden </option>
                                    <option value=""> Mas urgente </option>
                                    <option value="">Menos urgente</option>
                                    <option value="">Mas reciente</option>
                                    <option value="">Mas antiguo</option>
                                    <option value="">Por edificios</option>
                                </select></div>
                            </dropdown>
                        </Col>
                        <Col>
                            <input type="submit" value="       Finalizar       " size="20" onClick={botonFinalizar} />
                        </Col>
                    </div>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <h2>INCIDENCIAS</h2>
                        </Row>
                        <Row>
                            <List component="nav">
                                <ListItem button>
                                    <ListItemText primary="Rercoger basura" />
                                </ListItem>
                            </List>
                            {/*
                            <List>
                                {listStructure([1, 2, 3, 4, 5])}
                            </List>
                            */}
                        </Row>
                    </Col>

                </Row >
            </Col >
            <Col>
                {Map("mapSmall")}
            </Col>

        </div>
    );
}

export default EmpleadoMantenimiento;