import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json';

export async function getAllDocuments(token) {
  let options = { headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
  }
  let count = 0;
  let response = await axios.get('https://brewery-api.herokuapp.com/breweries', options)
  count+=response.data.breweries.length;
  response = await axios.get('https://brewery-api.herokuapp.com/styles', options)
  count+=response.data.styles.length;
  response = await axios.get('https://brewery-api.herokuapp.com/beers', options)
  count+=response.data.beer.length;
  return count;
}

export async function getBreweries(token) { 
  let response = await
    axios.get('https://brewery-api.herokuapp.com/breweries',
    {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
    })
  return response.data.breweries;
}

export async function getStyles(token) {
  let response = await
    axios.get('https://brewery-api.herokuapp.com/styles ',
    {
      headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
      }
    })

  return response.data.styles;
}

export async function getBeers(token) {
  let response = await
  axios.get('https://brewery-api.herokuapp.com/beers?detailed=true',
  {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
  })

  //reduce to group by brewery name
  let result = response.data.beer.reduce(function (r, a) {
    r[a.brewery.name] = r[a.brewery.name] || [];
    r[a.brewery.name].push(a);
    return r;
  }, Object.create(null));
  let to_return = [];
  jQuery.each(result, function(i, val) {
    to_return.push({brewery: i, data: val})
  });
  return to_return;
}
//module.exports.login = login();
