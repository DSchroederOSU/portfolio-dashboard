import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json';

export async function login() {
  let response = await
    axios.post('https://brewery-api.herokuapp.com/users/login',
    {
      "username" : "daniel",
      "password" : "password"
    },
    {
      headers: {
          'Content-Type': 'application/json',
      }
    })
  return response.data.token;
}

//module.exports.login = login();
