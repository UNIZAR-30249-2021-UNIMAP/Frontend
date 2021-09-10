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

export const ObtenerNombreCapa = (planta, res) => {
  return axios.request({
    url: 'http://localhost:8080/geoserver/proyecto/ows?service' +
      '=WFS&version=1.0.0&request=GetFeature&typeName=' + planta + '&outputFormat=application%2Fjson&BBOX='
      + res[0] + ',' + res[1] + ',' + res[0] + ',' + res[1] + '&propertyName=layer',
    method: 'get',
  })
}

export const ObtenerCoordenadas = (planta, nombreSala) => {
  console.log("nombreSala: " + nombreSala)
  return axios.request({
    url: 'http://localhost:8080/geoserver/proyecto/ows?service=WFS&version=1.1.0&request=GetGMLObject&typeNames=' + planta + 
    ':featuretype&featureID=' + nombreSala,
    method: 'get',
  })
}

//TODO: imagen
export const ReportarIncidencia = (email, descripcion, idEspacio, imagen) => {
  var bodyFormData = new FormData();
  bodyFormData.append('email', email)
  bodyFormData.append('descripcion', descripcion)
  bodyFormData.append('idEspacio', idEspacio)
  bodyFormData.append('imagen', imagen)
  return axios.request({
    url: 'http://localhost:7000/incidencia/reporte',
    method: 'post',
    data: bodyFormData
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
export const ObtenerIncidenciasEmpleadoMant = (idPersonalMantenimiento) => {
  return axios.request({
    url: 'http://localhost:7000/incidencia/mantenimiento?ID=' + idPersonalMantenimiento,
    method: 'get',
  })
}

export const FinIncidenciaMant = (idIncidencia) => {
  return axios.request({
    url: 'http://localhost:7000/incidencia/mantenimiento?idIncidencia=' + idIncidencia,
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
      swal({
        title: `Incidencia finalizada correctamente`,
        button: true
      }).then( _ => {
          window.location.reload()
      });
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

export const ObtenerEspacios = (proyector, edificio, planta, tipoSala, fechaInicio, fechaFin) => {
  return axios.request({
    url: 'http://localhost:7000/espacios?proyector=' +  proyector + '&edificio=' +edificio + '&planta=' + planta + '&tipoSala=' + tipoSala + '&fechaInicio=' + fechaInicio+ '&fechaFin=' + fechaFin,
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