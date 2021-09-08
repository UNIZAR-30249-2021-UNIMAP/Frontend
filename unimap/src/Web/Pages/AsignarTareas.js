import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { List, ListItem, ListItemText } from '@material-ui/core';
import swal from 'sweetalert';

import '../Styles/Reporte.css';
import '../Styles/Selector.css';

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { AceptarIncidencia, RechazarIncidencia, GetTest, ObtenerIncidencias } from "../../Utils/Endpoints";

const divStyle = {
    display: 'flex',
    alignItems: 'center'
};
const AsignarTareas = () => {
    const [fechaInicio, setFechaInicio] = useState(new Date());
    const [lista, setLista] = useState([1, 2])
    const [idEmpleado, setIdEmpleado] = useState("");
    const [idReporte, setIdReporte] = useState("");
    const [prio, setPrio] = useState("");
    const [motivo, setMotivo] = useState("");
    
    console.log(JSON.stringify(lista),"ARRAY");

    var listaBotones = lista.map((Member) => {
        var keys = Object.keys(Member)
        var index = keys.indexOf("id");
        if (index > -1) {
           // removes the "id" element from the keys.
           keys.splice(index, 1);
        }
        var divs = keys.map(k => <td>{lista[k]}</td>)
        return (
         <tr key={lista.id}>
         divs
         </tr>
        )
       });
     
    const handleButtonAccept = async e => {
        e.preventDefault();
        AceptarIncidencia(idReporte, idEmpleado, prio);
    }

    const handleButtonDeny = async e => {
        e.preventDefault();
        RechazarIncidencia(idReporte, motivo);
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
                console.log("La lista es "+lista)
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
                                selected={fechaInicio}
                                onChange={(date) => setFechaInicio(date)}
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
                            <div class="sidebar-box"><select id="idReporte">
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
                            {lista.map((element) =>
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
                        {lista.map((element) =>
                            <ListItem button>
                            <ListItemText primary={element.Nombre} />
                            </ListItem>
                        )}
                        </List>
                        {
                            <List>
                                {listaBotones}
                            </List>
                        }
                    </Row>
                    <Row>
                        <h3>Prioridad</h3>
                        <dropdown>
                            <div class="sidebar-box"><select id="idReporte">
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
                </Row>
            </Col>
        </div>
    );
}

export default AsignarTareas;