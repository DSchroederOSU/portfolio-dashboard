<template>

    <div class="content-container">

      <!--NAV LINKS-->
      <ul class="nav mb-5">
        <li class="nav-item" v-on:click="fetchBreweries">
          <a class="nav-link active" href="javascript:void(0);">Breweries</a>
        </li>
        <li class="nav-item" v-on:click="fetchBeers">
          <a class="nav-link" href="javascript:void(0);">Beers</a>
        </li>
        <li class="nav-item" v-on:click="fetchStyles">
          <a class="nav-link" href="javascript:void(0);">Styles</a>
        </li>
      </ul>
      <h1 class=" ml-3" id="header">{{header}}</h1>

      <!--LOADING-->
      <div class="mt-3 ml-3" v-if="loading">
        <div class="spinner-border text-primary align-middle" role="status">
          <span class="sr-only">Loading...</span>
        </div>
      </div>


      <!--BREWERIES-->
      <div class="mt-3 ml-3" v-if="breweries">
        <div v-for="item in breweries">
          <BreweryCard :brewery_name="item.name" :website="item.website" :address="item.address"></BreweryCard>
        </div>
      </div>

      <!--BEERS-->
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
              <div v-bind:id='`collapse${index}`' class="collapse" v-bind:aria-labelledby='`heading${index}`' data-parent="#beerAccordian">
                <div v-for="beer in item.data">
                  <BeerCard :beer_name="beer.name" :description="item.description" :abv="beer.abv" :ibu="beer.ibu" :brewery="beer.brewery.name"></BeerCard>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <!--STYLES-->
      <div class="mt-3 ml-3" v-if="styles">
        <ul class="list-group" v-for="item in styles">
          <li class="list-group-item">{{item.name}}</li>
        </ul>
      </div>
    </div>

</template>

<script>
import {login} from '../authenticate.js'
import {getBreweries, getBeers, getStyles} from '../data_service.js'
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
      loading : null,
      header : '',
      breweries : null,
      styles : null,
      beers : null,
      bearer_token : null
    }
  },
  async beforeCreate () {
    //let data = await this.axios.get('https://brewery-api.herokuapp.com/breweries')
  },
  async created() {
    this.header = "Breweries"
    this.fetchBreweries();
    let token = await login()
    this.bearer_token = token
  },
  mounted () {

  },
  methods: {
    async fetchBreweries() {
      if(this.loading!=true){
        this.loading = true;
        this.breweries = null;
        this.beers = null;
        this.styles = null;
        this.header = "Breweries"
        let breweries = await getBreweries(this.bearer_token)
        this.loading = false;
        this.breweries = breweries;
      }
    },
    async fetchBeers() {
      if(this.loading!=true){
        this.loading = true;
        this.breweries = null;
        this.beers = null;
        this.styles = null;
        this.header = "Beers"
        let beers = await getBeers(this.bearer_token)
        this.loading = false;
        this.beers = beers;
      }
    },
    async fetchStyles() {
      if(this.loading!=true){
        this.loading = true;
        this.breweries = null;
        this.beers = null;
        this.styles = null;
        this.header = "Styles"
        let styles = await getStyles(this.bearer_token)
        this.loading = false;
        this.styles = styles;

      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
a {
  font-size: 1.2rem;
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

#beerAccordian .card{
    border: 1px solid rgba(0,0,0,.125);
    border-radius: .25rem;
    margin-bottom: 10px;
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
