import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { List, ListItem, ListItemText } from '@material-ui/core';

import '../Styles/Report.css';
import '../Styles/Select.css';

import Map from "../../Utils/map"

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Accept, Deny } from "../../Utils/Endpointscalls";

const divStyle = {
    display: 'flex',
    alignItems: 'center'
};
const Janitor = () => {
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

    const handleButton = async e => {
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
                            <input type="submit" value="       Finalizar       " size="20" onClick={handleButton} />
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

export default Janitor;