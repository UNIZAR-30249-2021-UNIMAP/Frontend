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
  return axios.request({
    url: 'http://localhost:8080/geoserver/proyecto/ows?service' +
      '=WFS&version=1.0.0&request=GetFeature&typeName=' + planta + '&outputFormat=application%2Fjson&BBOX='
      + res[0] + ',' + res[1] + ',' + res[0] + ',' + res[1] + '&propertyName=id',
    method: 'get',
  })
}

//TODO: imagen
export const ReportarIncidencia = (email, descripcion, idEspacio, imagen) => {
  return axios.request({
    url: 'http://localhost:7000/incidencia/reporte?email=' + email + '&descripcion=' + descripcion + '&idEspacio=' + idEspacio + '&imagen= TEST',
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
      swal({
        title: `Incidencia reportada con éxito en el espacio ${idEspacio}`,
        button: true
      }).then( _ => {
          window.location.reload()
      });
    }
  })
}

export const AceptarIncidencia = (idIncidencia, idEmpleado, prioridad) => {
  return axios.request({
    url: 'http://localhost:7000/incidencia/administrador?idIncidencia=' + idIncidencia + '&idEmpleado=' + idEmpleado + '&prioridad=' + prioridad + '&aceptar=' + true + '&motivo=' + null,
    method: 'post',
  }).then(res => {
    if (!res.data || res.data == "error") {
      console.log("Error")
      swal({
        title: "Error",
        text: "El personal seleccionado ya tiene el máximo de tareas de este tipo",
        icon: "error"
      });
    } else {
      swal({
        title: `Incidencia asignada con éxito con prioridad ${prioridad}`,
        button: true
      }).then( _ => {
          window.location.reload()
      });
      console.log("Incidencia asignada: " + res.data)
    }
  })
}

export const RechazarIncidencia = (idIncidencia, motivo) => {
  return axios.request({
    url: 'http://localhost:7000/incidencia/administrador?idIncidencia=' + idIncidencia + '&idEmpleado=-1' + '&prioridad=' + null + '&aceptar=' + false + '&motivo=' + motivo,
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
      swal({
        title: `Incidencia rechazada correctamente`,
        button: true
      }).then( _ => {
          window.location.reload()
      });
      console.log("Incidencia denegada: " + res.data)
    }
  })
}

export const ObtenerIncidencias = () => {
  return axios.request({
    url: 'http://localhost:7000/incidencia',
    method: 'get'
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
    method: 'get'
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