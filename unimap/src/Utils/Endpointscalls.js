import axios from 'axios'
import swal from 'sweetalert';

export const Login = (correo, pass) => {
  return axios.request({
    url: 'http://localhost:7000/login?email=' + correo + '&contrasena=' + pass,
    method: 'post',
    data: {
      'email': correo,
      'contrasena': pass,
    },
  }).then(res => {
    if (!res.data) {
      console.log("Error")
      swal({
        title: "Error",
        text: "Usuario o contraseña incorrectos.",
        icon: "error"
      });
    } else {
      console.log("El endpoint nos devuelve: " + JSON.stringify(res.data))
    }
  })
}

export const Register = (correo, pass, usuario) => {
  return axios.request({
    url: 'http://localhost:7000/registro?email=' + correo + '&contrasena=' + pass + '&nombreUsuario=' + usuario,
    method: 'post',
  }).then(res => {
    if (!res.data) {
      console.log("Error")
      swal({
        title: "Error",
        text: "Usuario o correo ya existe.",
        icon: "error"
      });
    } else {
      console.log("El endpoint nos devuelve: " + res.data)
    }
  })
}
export const getNameClass = (planta, res) => {
  axios.request({
    url: 'http://35.195.165.185:8080/geoserver/proyecto/ows?service' +
      '=WFS&version=1.0.0&request=GetFeature&typeName=' + planta + '&outputFormat=application%2Fjson&BBOX='
      + res[0] + ',' + res[1] + ',' + res[0] + ',' + res[1] + '&propertyName=id',
    method: 'get',
  }).then(res => {
    if (!res.data) {
      console.log("Error")
    } else {
      if (res.data.features.length > 0) {
        console.log("El endpoint nos devuelve: " + JSON.stringify(res.data.features[0].id))
      } else {
        console.log("No se ha encontrado ninguna sala")
      }
    }
  })
}

//TODO: imagen
export const Report = (email, description, idEspacio) => {
  return axios.request({
    url: 'http://localhost:7000/incidencia/reporte?email=' + email + '&descripcion=' + description + '&idEspacio=' + idEspacio + '&imagen=THIS IS A TEST',
    method: 'post',
  }).then(res => {
    if (!res.data) {
      console.log("Error")
      swal({
        title: "Error",
        text: "No se pudo realizar la petición.",
        icon: "error"
      });
    } else {
      console.log("El endpoint nos devuelve: " + res.data)
    }
  })
}

export const Accept = (idIncidencia, idEmpleado, prioridad) => {
  return axios.request({
    url: 'http://localhost:7000/incidencia/administrador?idIncidencia=' + idIncidencia + '&idEmpleado=' + idEmpleado + '&prioridad=' + prioridad + '&aceptar=' + "aceptar" + '&motivo=' + null,
    method: 'post',
  }).then(res => {
    if (!res.data) {
      console.log("Error")
      swal({
        title: "Error",
        text: "No se a podidio realizar la operacion",
        icon: "error"
      });
    } else {
      console.log("Incidencia asignada: " + res.data)
    }
  })
}

export const Deny = (idIncidencia, motivo) => {
  return axios.request({
    url: 'http://localhost:7000/incidencia/administrador?idIncidencia=' + idIncidencia + '&idEmpleado=' + null + '&prioridad=' + null + '&aceptar=' + "denegar" + '&motivo=' + motivo,
    method: 'post',
  }).then(res => {
    if (!res.data) {
      console.log("Error")
      swal({
        title: "Error",
        text: "No se a podidio realizar la operacion",
        icon: "error"
      });
    } else {
      console.log("Incidencia denegada: " + res.data)
    }
  })
}

//TODO Discutir param
export const GetIncidenciasMant = () => {
  return axios.request({
    url: 'http://localhost:7000/incidencia/mantenimiento',
    method: 'get',
  }).then(res => {
    if (!res.data) {
      console.log("Error")
      swal({
        title: "Error",
        text: "No se a podidio realizar la operacion",
        icon: "error"
      });
    } else {
      console.log("Incidencias devueltas: " + res.data)
    }
  })
}

export const FinIncidenciaMant = (idIncidencia) => {
  return axios.request({
    url: 'http://localhost:7000/incidencia/mantenimiento',
    method: 'post',
  }).then(res => {
    if (!res.data) {
      console.log("Error")
      swal({
        title: "Error",
        text: "No se a podidio realizar la operacion",
        icon: "error"
      });
    } else {
      console.log("Incidencias finalizada: " + res.data)
    }
  })
}

export const GetMant = () => {
  return axios.request({
    url: 'http://localhost:7000/mantenimiento',
    method: 'get',
  }).then(res => {
    if (!res.data) {
      console.log("Error")
      swal({
        title: "Error",
        text: "No se a podidio realizar la operacion",
        icon: "error"
      });
    } else {
      console.log("Lista devuelta: " + res.data)
    }
  })
}

export const GetEspacio = (idEspacio) => {
  return axios.request({
    url: 'http://localhost:7000/espacio?idSala='+idEspacio,
    method: 'get',
  }).then(res => {
    if (!res.data) {
      console.log("Error")
      swal({
        title: "Error",
        text: "No se a podidio realizar la operacion",
        icon: "error"
      });
    } else {
      console.log("Info espacio devueltas: " + res.data)
    }
  })
}