import rp from 'request-promise'
import cheerio from 'cheerio';
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json';


export async function getBeerInfo(url) {

    let html = await rp(`https://cors-anywhere.herokuapp.com/${url}`);
    let root = cheerio("meta[property='og:url']", html).attr("content").split('/b')[0];
    let description = formatString(cheerio('.beer-descrption-read-less', html).text().split(' Show Less')[0]);
    let name = cheerio('.name > h1', html).text();
    let abv = cheerio('.abv', html).text().split('%')[0];
    let ibu = cheerio('.ibu', html).text().split('\n')[1].split(' ')[0];
    if(ibu == 'No'){
      ibu = 0;
    }
    let style = cheerio('.style', html).text();
    let brewery_page = await rp(`https://cors-anywhere.herokuapp.com/${root}${cheerio('.brewery > a', html).attr('href')}`)
    let brewery = formatString(cheerio('.name > h1', brewery_page).text());
    let location = cheerio('.name > .brewery', brewery_page).text();
    let website = cheerio('.social > .url', brewery_page).attr('href');
    let facebook = cheerio('.social > .fb', brewery_page).attr('href');
    let twitter = cheerio('.social > .tw', brewery_page).attr('href');
    let city = formatString(location.split(', ')[0]);
    let state = location.split(', ')[1].split(' USA')[0].split(' United States')[0]

    // Post style first
    let post_style = await postStyle(style);
    let brewery_object = {
      name: brewery,
      website: website,
      facebook_url: facebook,
      twitter_url: twitter,
      city: city,
      state: state
    }

    // Post brewery second
    let post_brewery = await postBrewery(brewery_object);
    let beer_object = {
      name: name,
      description: description,
      ibu: ibu,
      abv: abv,
      Brewery : brewery,
      Style : style
    }

    // finally post the beer
    let post_beer = await postBeer(beer_object);
}

const formatString = ( s ) => {
  return s.replace(/\n|\r|/g, "").trim();
}

const postStyle = async (style) => {
  try {
    let headers = { 'Content-Type': 'application/json' }
    let response = await axios.post('https://brewery-api.herokuapp.com/styles', {name: style.toString()}, {headers: headers})
  }
  catch(err) {
    if(error.response.status === 409){
      return resolve();
    }
    return reject(error.response);
  }
}

const postBrewery = async (brewery_object) => {
  try {
    let headers = { 'Content-Type': 'application/json' }
    let response = await axios.post('https://brewery-api.herokuapp.com/breweries', brewery_object, {headers: headers})
  }
  catch(err) {
    if(error.response.status === 409){
      return resolve();
    }
    return reject(error.response);
  }
}

const postBeer = async (beer_object) => {
  try {
    let headers = { 'Content-Type': 'application/json' }
    let response = await axios.post('https://brewery-api.herokuapp.com/beers', beer_object, {headers: headers})
  }
  catch(err) {
    if(error.response.status === 409){
      return resolve();
    }
    return reject(error.response);
  }
}
