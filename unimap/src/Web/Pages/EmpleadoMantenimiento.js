import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { List, ListItem, ListItemText } from '@material-ui/core';

import '../Styles/Reporte.css';
import '../Styles/Selector.css';

import Map from "../../Utils/map"
import swal from 'sweetalert';

import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import { ObtenerIncidenciasEmpleadoMant, GetTest } from "../../Utils/Endpoints";

const divStyle = {
    display: 'flex',
    alignItems: 'start'
};

const scrollboxStryle = {
    overflowY: 'scroll',
    border: '1px solid red',
    width: '700px',
    float: 'left',
    height: '500px',
    position: 'relative',
    marginLeft: '20px',
    backgroundColor: 'white'

};
const EmpleadoMantenimiento = () => {
    //const [List, setLista] = useState([])
    const [fechaInicio, setFechaInicio] = useState(new Date());
    //const [lista, setLista] = useState([1, 2])
    const [idEmpleado, setIdEmpleado] = useState("");
    const [idReporte, setIdReporte] = useState("");
    const [prio, setPrio] = useState("");
    const [motivo, setMotivo] = useState("");
    const [listaIncidenciasMostrada, setListaIncidenciasMostrada] = useState([1, 2])
    var lista = ({"tareasNormales":[{"descripcion":"asdasdas","estado":"PENDIENTE","idEspacio":"undefined","reportadoTimeStamp":"2021-09-10 08:47:11.7537","id":358590,"prioridad":"NORMAL"},{"descripcion":"2","estado":"PENDIENTE","idEspacio":"undefined","reportadoTimeStamp":"2021-09-10 08:48:57.411329","id":358591,"prioridad":"NORMAL"},{"descripcion":"mapa","estado":"PENDIENTE","idEspacio":"undefined","reportadoTimeStamp":"2021-09-10 08:37:04.889727","id":358588,"prioridad":"NORMAL"},{"descripcion":"asdf","estado":"PENDIENTE","idEspacio":"adap04.43","reportadoTimeStamp":"2021-09-10 08:55:14.820887","id":358592,"prioridad":"NORMAL"}],"tareasUrgentes":[{"descripcion":"incidencia creada desde front","estado":"PENDIENTE","idEspacio":"undefined","reportadoTimeStamp":"2021-09-10 08:10:26.69195","id":358586,"prioridad":"URGENTE"}]})
    var filtro
    const botonFinalizar = async e => {
        e.preventDefault();
        //EndTask(idReport);
    }

    const cambioFiltro = filtroNuevo => {
        filtro = filtroNuevo;
        //console.log(edificio)
        if(filtro == "Mas prioridad"){
            ordenarListaMasUrgente()
        }else if(filtro == "Menos prioridad"){
            ordenarListaMenosUrgente()
        }else if(filtro == "Mas reciente"){
            ordenarListaMasReciente()
        }else if(filtro == "Mas antiguo"){
            ordenarListaMasAntiguo()
        }else if(filtro == "Por edificios"){
            ordenarListaPorEdificio()
        }
        
        console.log(JSON.stringify(listaIncidenciasMostrada))
    }

    function ordenarListaMasUrgente() {
        const sorted = [...listaIncidenciasMostrada].sort((a, b) => b.prioridad.localeCompare(a.prioridad))
        setListaIncidenciasMostrada(sorted)
    }
    function ordenarListaMenosUrgente() {
        const sorted = [...listaIncidenciasMostrada].sort((a, b) => a.prioridad.localeCompare(b.prioridad))
        setListaIncidenciasMostrada(sorted)
    }
    function ordenarListaMasReciente() {
        const sorted = [...listaIncidenciasMostrada].sort((a, b) => b.reportadoTimeStamp.localeCompare(a.reportadoTimeStamp))
        setListaIncidenciasMostrada(sorted)
    }
    function ordenarListaMasAntiguo() {
        const sorted = [...listaIncidenciasMostrada].sort((a, b) => a.reportadoTimeStamp.localeCompare(b.reportadoTimeStamp))
        setListaIncidenciasMostrada(sorted)
    }
    function ordenarListaPorEdificio() {
        const sorted = [...listaIncidenciasMostrada].sort((a, b) => b.idEspacio.localeCompare(a.idEspacio))
        setListaIncidenciasMostrada(sorted)
    }

    async function cogerDatos() {
        //e.preventDefault();
        //ObtenerIncidenciasEmpleadoMant().then(res => {
        GetTest().then(res => {
            console.log("datos obtener incidencias: ")
            console.log(res.data)
            if (!res.data) {
                //console.log("Error")
                swal({
                    title: "Error",
                    text: "No se a podidio realizar la operacion",
                    icon: "error"
                });
            } else {
                //console.log("Informacion sin tratar" + res.data)
                //console.log("Informacion try sin tratar" + res.data)
                //console.log("Info espacio devueltas: " + JSON.stringify(res.data))
                var array = []
                res.data = lista
                res.data.tareasNormales.forEach(function (item) {
                    array.push(JSON.parse(JSON.stringify(item)))
                })
                res.data.tareasUrgentes.forEach(function (item) {
                    array.push(JSON.parse(JSON.stringify(item)))
                })
                setListaIncidenciasMostrada(array)
            }
        }
        );
    }
    useEffect(() => {
        cogerDatos();
    }, []);
    return (
        <div style={divStyle}>
            <Col style={{ marginTop: '30px' }}>
                {Map("mapSmall")}
            </Col>
            <Col style={{ marginTop: '20px', marginLeft: '50px' }}>
                <Row>
                    <div style={divStyle}>
                        <Col>
                            <dropdown>
                                <div class="sidebar-box"><select id="Orden" onChange={e => cambioFiltro(e.target.value)}>
                                    <option selected disabled> Orden </option>
                                    <option value="Mas prioridad">Mas prioridad</option>
                                    <option value="Menos prioridad">Menos prioridad</option>
                                    <option value="Mas reciente">Mas reciente</option>
                                    <option value="Mas antiguo">Mas antiguo</option>
                                    <option value="Por edificios">Por edificios</option>
                                </select></div>
                            </dropdown>
                        </Col>
                        <Col>
                            <input style={{ marginTop: '14px' }} type="submit" value="       Finalizar       " size="20" onClick={botonFinalizar} />
                        </Col>
                    </div>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <h2 style={{ color: 'white' }}>INCIDENCIAS</h2>
                        </Row>
                        <Row style={scrollboxStryle}>
                            <List>
                                {listaIncidenciasMostrada.map((element) =>
                                    <ListItem button >
                                        <ListItemText primary={element.id} secondary={"Estado: " + element.estado + "   " + "Prioridad: " + element.prioridad  + " Fecha reporte: " + element.reportadoTimeStamp  + " Espacio: " + element.idEspacio} />
                                    </ListItem>
                                )}
                            </List>
                        </Row>
                    </Col>

                </Row >
            </Col >
        </div>
    );
}

export default EmpleadoMantenimiento;