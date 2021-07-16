import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { List, ListItem, ListItemText } from '@material-ui/core';

import '../Styles/Report.css';
import '../Styles/Select.css';

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Accept, Deny } from "../../Utils/Endpointscalls";

const divStyle = {
    display: 'flex',
    alignItems: 'center'
};
const AssignTask = () => {
    const [startDate, setStartDate] = useState(new Date());
    //const [List, setLista] = useState([])
    const [idJanitor, setidJanitor] = useState("");
    const [idReport, setidReport] = useState("");
    const [prio, setprio] = useState("");
    const [motivo, setmotivo] = useState("");

    /*const listStructure = (nodes) => {
        return nodes.map(node => (
            <ListItem
                primaryText={node.toString}
            />
        ));
    };*/

    const handleButtonAccept = async e => {
        e.preventDefault();
        Accept(idReport, idJanitor, prio);
    }

    const handleButtonDeny = async e => {
        e.preventDefault();
        Deny(idReport, motivo);
    }

    return (
        <div style={divStyle}>
            <Col>
                <Row>
                    <div style={divStyle}>
                        <Col>
                            <dropdown>
                                <div class="sidebar-box"><select id="Edificio">
                                    <option selected disabled> Edificio </option>
                                    <option value="">Ada Byron</option>
                                    <option value="">Torres Quevedo</option>
                                    <option value="">Betancourt</option>
                                </select></div>
                            </dropdown>
                        </Col>
                        <Col>
                            <text>
                                <h2>Fecha del reporte</h2>
                            </text>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                                dateFormat="dd/MM/yyyy" />
                        </Col>
                        <Col>
                            <dropdown>
                                <div class="sidebar-box"><select id="Estado">
                                    <option selected disabled> Estado </option>
                                    <option value="">Reportado</option>
                                    <option value="">Pendiente</option>
                                    <option value="">Finalizada</option>
                                    <option value="">Rechazada</option>
                                </select></div>
                            </dropdown>
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
                <div style={divStyle}>
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
                    <Row>
                        <h3>Prioridad</h3>
                        <dropdown>
                            <div class="sidebar-box"><select id="idReport">
                                <option value="">NORMAL</option>
                                <option value="">URGENTE</option>
                            </select></div>
                        </dropdown>
                    </Row>
                    <Row>
                        <Col>
                            <input type="submit" value="       Aceptar       " size="20" onClick={handleButtonAccept} />
                        </Col>
                        <Col>
                            <input type="submit" value="       Rechazar       " size="20" onClick={handleButtonDeny} />
                        </Col>
                    </Row>
                </div>
            </Col>
        </div>
    );
}

export default AssignTask;