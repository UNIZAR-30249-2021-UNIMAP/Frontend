import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import swal from 'sweetalert';

import '../Styles/Report.css';
import '../Styles/Select.css';

import "react-datepicker/dist/react-datepicker.css";
import { Accept, Deny } from "../../Utils/Endpointscalls";
import { Button } from 'antd';

const divStyle = {
    display: 'flex',
    alignItems: 'center'
};
const AssignCapacity = () => {
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

    const handleButtonSpace = async e => {
        e.preventDefault();
        swal({
            title: "Selecciona aforo máximo",
            content: "input",
            buttons: true
          }).then((value) => {
            swal(`Aforo seleccionado: ${value} personas`);
          });;
    }

    const handleButtonApply = async e => {
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
                {lista.map(s => <ul><Button onClick={handleButtonSpace} type="default" size="large" key={s.commentatorID} value={s.commentatorID}>{s.commentatorID}</Button></ul>)}
               
                <text color="white">
                    <h2>Aplicar regla a todos los espacios</h2>
                </text>
                <h2>Introduzca una distancia de seguridad en metros</h2>
                
                <Row>
                    <textarea color="black" type="text" name="name" id="name" cols="50" rows="2" />
                    <Button onClick={handleButtonApply}>Aplicar cambios</Button>
                </Row>
            </Col>
        </div>
        </form>
    );
}



export default AssignCapacity;