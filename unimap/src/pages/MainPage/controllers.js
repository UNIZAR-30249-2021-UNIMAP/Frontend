import axios from 'axios'

export const login = newUser => {
    return axios.post('http://localhost:7000/login')
    .then(res => {
      const persons = res.data;
      console.log("El endpoint nos devuelve: "+res.data)
    })
}


export default login;