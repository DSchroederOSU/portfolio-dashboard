<template>

    <div class="content-container">
      <ul class="nav mb-5">
        <li class="nav-item" v-on:click="fetchBreweries">
          <a class="nav-link active" href="#">Breweries</a>
        </li>
        <li class="nav-item" v-on:click="fetchBeers">
          <a class="nav-link" href="#">Beers</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Styles</a>
        </li>
      </ul>
      <h1 class=" ml-3" id="header">{{header}}</h1>
      <div class="mt-3 ml-3" v-if="loading">
        <div class="spinner-border text-primary align-middle" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>


      <div class="mt-3 ml-3" v-if="breweries">
        <div v-for="item in breweries">
          <BreweryCard :brewery_name="item.name" :facebook="item.facebook_url" :address="item.address"></BreweryCard>
        </div>
      </div>
      <div class="mt-3 ml-3" v-if="beers">
          <div class="accordion" id="beerAccordian">
              <div v-for="(item, index) in beers">
                <div class="card">
                  <div class="card-header" v-bind:id='`heading${index}`'>
                    <h2 class="mb-0">
                      <button class="btn btn-link collapsed" type="button" data-toggle="collapse" v-bind:data-target='`#collapse${index}`'
                        aria-expanded="true" v-bind:aria-controls='`collapse${index}`'>
                        {{item.brewery}}
                      </button>
                    </h2>
                  </div>
                  <div v-bind:id='`collapse${index}`' class="collapse" v-bind:aria-labelledby='`heading${index}`' data-parent="#accordionExample">
                      <div v-for="beer in item.data">
                        <BeerCard :beer_name="beer.name" :description="item.description" :abv="beer.abv" :ibu="beer.ibu" :brewery="beer.brewery.name"></BeerCard>
                      </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </div>

</template>

<script>
import {login} from '../authenticate.js'
import {getBreweries, getBeers} from '../data_service.js'
import BreweryCard from '@/components/BreweryCard.vue'
import BeerCard from '@/components/BeerCard.vue'

export default {
  name: 'Data',
  components: {
    BreweryCard,
    BeerCard
  },
  data : () => {
    return {
      loading : true,
      header : '',
      breweries : null,
      beers : null,
      bearer_token : null
    }
  },
  async beforeCreate () {
    //let data = await this.axios.get('https://brewery-api.herokuapp.com/breweries')
  },
  created() {
    this.header = "Breweries"
    this.fetchBreweries();
  },
  methods: {
    async fetchBreweries() {
      this.loading = true;
      this.breweries = null;
      this.beers = null;
      this.header = "Breweries"
      let token = await login()
      this.bearer_token = token
      let breweries = await getBreweries(this.bearer_token)
      this.loading = false;
      this.breweries = breweries.breweries

    },
    async fetchBeers() {
      this.loading = true;
      this.breweries = null;
      this.beers = null;
      this.header = "Beers"
      let token = await login()
      this.bearer_token = token
      let beers = await getBeers(this.bearer_token)
      this.loading = false;
      this.beers = beers
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  text-decoration: none;
}
.content-container{

  overflow-y: auto;
  height: auto;
}
.spinner-border{
  width: 10vw;
  height: 10vw;
}

.Chart {
  max-width: 50vw;
  width: auto;
  padding: 20px;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, .2);
  border-radius: 10px;
  margin: 50px 0;
}
</style>
