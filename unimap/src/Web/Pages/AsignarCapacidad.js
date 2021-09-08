import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import swal from 'sweetalert';

import '../Styles/Reporte.css';
import '../Styles/Selector.css';

import "react-datepicker/dist/react-datepicker.css";
import { Button } from 'antd';

const divStyle = {
    display: 'flex',
    alignItems: 'center'
};
const AsignarCapacidad = () => {
    const [lista, setLista] = useState([{
        "commentID":25,
        "matchID":43234,
        "commentatorID":12537228724216704,
        "timeM":67,
        "timeRT":null,
        "action":"goal",
        "description":"aaaaaaaa"
    },
    {
        "commentID":27,
        "matchID":56,
        "commentatorID":12537228724216704,
        "timeM":14,
        "timeRT":null,
        "action":"",
        "description":"fgfafafaaffaafasfasf"
    }])

    const seleccionEspacio = async e => {
        e.preventDefault();
        swal({
            title: "Selecciona aforo máximo",
            content: "input",
            buttons: true
          }).then((value) => {
            swal(`Aforo seleccionado: ${value} personas`);
          });;
    }

    const aplicar = async e => {
        e.preventDefault();
        swal({
            title: "Cambios aplicados",
            icon: "success",
            button: true
          })
    }

    return (
        <form>
        <div className="form-inner">
            <Col>
                <h2>Asignar aforo a espacios concretos</h2>
                {lista.map(s => <ul><Button onClick={seleccionEspacio} type="default" size="large" key={s.commentatorID} value={s.commentatorID}>{s.commentatorID}</Button></ul>)}
               
                <h2 style={{marginTop:'60px'}}>Aplicar regla a todos los espacios: <br/> Introduzca una distancia de seguridad en metros</h2>
                
                <Row>
                    <textarea color="black" type="text" name="name" id="name" cols="50" rows="2" />
                    <div style={{marginTop:'10px'}}>
                        <Button onClick={aplicar}>Aplicar cambios</Button>
                    </div>
                </Row>
            </Col>
        </div>
        </form>
    );
}



export default AsignarCapacidad;