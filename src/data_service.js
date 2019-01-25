import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json';

export async function getBreweries(token) {
  console.log(token)
  let response = await
    axios.get('https://brewery-api.herokuapp.com/breweries',
    {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
    })
  return response.data;
}

export async function getBeers(token) {
  console.log(token)
  let response = await
    axios.get('https://brewery-api.herokuapp.com/beers?detailed=true',
    {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
    })
    console.log(response.data)
  return response.data;
}
//module.exports.login = login();
