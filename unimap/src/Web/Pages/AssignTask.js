import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { List, ListItem, ListItemText } from '@material-ui/core';
import swal from 'sweetalert';

import '../Styles/Report.css';
import '../Styles/Select.css';

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { Accept, Deny, GetTest } from "../../Utils/Endpointscalls";

const divStyle = {
    display: 'flex',
    alignItems: 'center'
};
const AssignTask = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [list, setLista] = useState([1, 2])
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

    async function cogerDatos() {
        //e.preventDefault();
        GetTest().then(res => {
            if (!res.data) {
                console.log("Error")
                swal({
                  title: "Error",
                  text: "No se a podidio realizar la operacion",
                  icon: "error"
                });
              } else {
                console.log("Info espacio devueltas: " + JSON.stringify(res.data))
                console.log("La lista es "+list)
                var array = []
                res.data.forEach(function(item){
                    array.push(JSON.parse(JSON.stringify(item)))
                })
                //setLista(JSON.parse(JSON.stringify(res.data)))
                console.log("La lista es "+array.toString())
                setLista(array)
              }
            }
            );
    }

    useEffect(() => {
        cogerDatos();
      }, []);

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
                        <Col>
                        <h3>Prioridad</h3>
                        <dropdown>
                            <div class="sidebar-box"><select id="idReport">
                                <option value="">NORMAL</option>
                                <option value="">URGENTE</option>
                            </select></div>
                        </dropdown></Col>
                        <Col>
                        <input type="submit" value="       Aceptar       " size="20" onClick={handleButtonAccept} />
                        </Col>
                        <Col>
                            <input type="submit" value="       Rechazar       " size="20" onClick={handleButtonDeny} />
                        </Col>
                    </div>

                </Row>
                <Row>

                    <Col>
                        <Row>
                            <h2>INCIDENCIAS</h2>
                        </Row>
                        <Row>
                            <List>
                            {list.map((element) =>
                                <ListItem button>
                                <ListItemText primary={element.Nombre} />
                                </ListItem>
                            )}
                            </List>
                        </Row>
                    </Col>

                </Row >
            </Col >
            <Col>
                <Row>
                <div style={divStyle}>
                    <Row>
                        <List>
                        {list.map((element) =>
                            <ListItem button>
                            <ListItemText primary={element.Nombre} />
                            </ListItem>
                        )}
                        </List>
                    </Row>
                </div>
                </Row>
            </Col>
        </div>
    );
}

export default AssignTask;