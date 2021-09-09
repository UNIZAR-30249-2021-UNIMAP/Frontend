import axios from 'axios'
import swal from 'sweetalert';

export const Login = (correo, contrasena) => {
  return axios.request({
    url: 'http://localhost:7000/login?email=' + correo + '&contrasena=' + contrasena,
    method: 'post',
    data: {
      'email': correo,
      'contrasena': contrasena,
    },
  })
}

export const Registrarse = (correo, contrasena, usuario) => {
  return axios.request({
    url: 'http://localhost:7000/registro?email=' + correo + '&contrasena=' + contrasena + '&nombreUsuario=' + usuario,
    method: 'post',
  })
}

//TODO: pasar cadena vacia  en aquellos campos que no se modifiquen
export const ObtenerNombreSala = (planta, res) => {
  axios.request({
    url: 'http://localhost:8080/geoserver/proyecto/ows?service' +
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
export const ReportarIncidencia = (email, descripcion, idEspacio) => {
  return axios.request({
    url: 'http://localhost:7000/incidencia/reporte?email=' + email + '&descripcion=' + descripcion + '&idEspacio=' + idEspacio + '&imagen=THIS IS A TEST',
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

export const AceptarIncidencia = (idIncidencia, idEmpleado, prioridad) => {
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

export const RechazarIncidencia = (idIncidencia, motivo) => {
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

export const ObtenerIncidencias = () => {
  return axios.request({
    url: 'http://localhost:7000/incidencia',
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
      console.log("Lista incidencias: " + res.data)
    }
  })
}

//TODO Discutir param
export const ObtenerIncidenciasEmpleadoMant = () => {
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

export const ObtenerCargaTrabajoEmpleadosMant = () => {
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

export const ObtenerEspacio = (idEspacio) => {
  return axios.request({
    url: 'http://localhost:7000/espacio?idSala=' + idEspacio,
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

export const GetTest = () => {
  var response = axios.request({
    url: 'https://servicios.ine.es/wstempus/js/ES/OPERACIONES_DISPONIBLES',
    method: 'get',
  })
  return response
}