import rp from 'request-promise'
import cheerio from 'cheerio';
import axios from 'axios'
axios.defaults.headers.post['Content-Type'] = 'application/json';


export async function getBeerInfo(url) {
  return new Promise(function(resolve, reject) {
    let root;

    let description;
    let name ;

    let abv;
    let ibu;
    let style;
    rp(url)
      .then(function(html){
        //success!
        root = cheerio("meta[property='og:url']", html).attr("content").split('/b')[0];
        description = formatString(cheerio('.beer-descrption-read-less', html).text().split(' Show Less')[0]);
        name = cheerio('.name > h1', html).text();
        abv = cheerio('.abv', html).text().split('%')[0];
        ibu = cheerio('.ibu', html).text().split('\n')[1].split(' ')[0];
        if(ibu == 'No'){
          ibu = 0;
        }
        style = cheerio('.style', html).text();
        return  rp(`https://cors-anywhere.herokuapp.com/${root}${cheerio('.brewery > a', html).attr('href')}`)
      })
      .then(function(brewery_page){
        let brewery = formatString(cheerio('.name > h1', brewery_page).text());
        let location = cheerio('.name > .brewery', brewery_page).text();
        let website = cheerio('.social > .url', brewery_page).attr('href');
        let facebook = cheerio('.social > .fb', brewery_page).attr('href');
        let twitter = cheerio('.social > .tw', brewery_page).attr('href');
        let city = formatString(location.split(', ')[0]);
        let state = location.split(', ')[1].split(' USA')[0].split(' United States')[0]
        // this will either add the style to the db or reject due to duplicate

        postStyle(style)
        let brewery_object = {
          name: brewery,
          website: website,
          facebook_url: facebook,
          twitter_url: twitter,
          city: city,
          state: state
        }
        postBrewery(brewery_object)

        //finally lets post the beers
        let beer_object = {
          name: name,
          description: description,
          ibu: ibu,
          abv: abv,
          Brewery : brewery,
          Style : style
        }
        postBeer(beer_object);
        console.log("complete")
        return resolve();
      })
      .catch(function(err){
        //handle error
        return reject(err);
      });
    }); //end promise
}

const formatString = ( s ) => {
  return s.replace(/\n|\r|/g, "").trim();
}


const postStyle = async (style) => {
  let headers = {
    'Content-Type': 'application/json'
  }
  let response = await
  axios.post('https://brewery-api.herokuapp.com/styles', {name: style.toString()}, {headers: headers})
  .then(function (response) {
    return resolve();
  })
  .catch(function (error) {
    return;
  });
}

const postBrewery = async (brewery_object) => {
  let headers = {
    'Content-Type': 'application/json'
  }
  let response = await
  axios.post('https://brewery-api.herokuapp.com/breweries', brewery_object, {headers: headers})
  .then(function (response) {
    return resolve();
  })
  .catch(function (error) {
    return;
  });
}

const postBeer = async (beer_object) => {
  let headers = {
    'Content-Type': 'application/json'
  }
  let response = await
  axios.post('https://brewery-api.herokuapp.com/beers', beer_object, {headers: headers})
  .then(function (response) {
    return resolve();
  })
  .catch(function (error) {
    return;
  });
}
