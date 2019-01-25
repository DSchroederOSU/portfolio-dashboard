<template>
  <div class="view-container">
    <ul class="nav">
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
    <h1 id="header">{{header}}</h1>
    <div class="mt-3 ml-3" v-if="breweries">
      <div v-for="item in breweries">
        <BreweryCard :brewery_name="item.name" :facebook="item.facebook_url" :address="item.address"></BreweryCard>
      </div>
    </div>
    <div class="mt-3 ml-3" v-if="beers">
      <div v-for="item in beers">
        <p>
          <BeerCard :beer_name="item.name" :description="item.description" :abv="item.abv" :ibu="item.ibu" :brewery="item.brewery.name"></BeerCard>
        </p>
      </div>
    </div>
    <!-- <span v-on:click="dashboard">Hello</span> -->



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
      this.beers = null;
      this.header = "Breweries"
      let token = await login()
      this.bearer_token = token
      let breweries = await getBreweries(this.bearer_token)
      this.breweries = breweries.breweries

    },
    async fetchBeers() {
      this.breweries = null;
      this.header = "Beers"
      let token = await login()
      this.bearer_token = token
      let beers = await getBeers(this.bearer_token)
      this.beers = beers.beer
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  text-decoration: none;
}

.view-container{
  height: 100%;
  overflow: hidden;
  padding: 30px;
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
