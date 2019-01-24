import axios from 'axios'


export async function login() {
  axios.post('http://brewery-api.herokuapp.com/users/login', {
    username : "daniel",
    password : "password"
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}

//module.exports.login = login();
