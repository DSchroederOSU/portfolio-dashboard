<template>

    <div class="content-container">

      <!--NAV LINKS-->
      <ul class="nav mb-5">
        <li class="nav-item" v-on:click="mountBreweries">
          <a class="nav-link active" href="javascript:void(0);">Breweries</a>
        </li>
        <li class="nav-item" v-on:click="mountBeers">
          <a class="nav-link" href="javascript:void(0);">Beers</a>
        </li>
        <li class="nav-item" v-on:click="mountStyles">
          <a class="nav-link" href="javascript:void(0);">Styles</a>
        </li>
      </ul>
      <h1 class=" ml-3" id="header">{{header}}</h1>

      <!--BREWERIES-->
      <div class="mt-3 ml-3" v-show="breweries">
        <BreweryCard :token='`${this.bearer_token}`'></BreweryCard>
      </div>

      <!--BEERS-->
      <div class="mt-3 ml-3" v-show="beers">
        <BeerCard :token='`${this.bearer_token}`'> </BeerCard>
      </div>

      <!--STYLES-->
      <div class="mt-3 ml-3" v-show="styles">
        <StyleCard :token='`${this.bearer_token}`'> </StyleCard>
      </div>
    </div>

</template>

<script>
import {login} from '../authenticate.js'
import BreweryCard from '@/components/BreweryCard.vue'
import BeerCard from '@/components/BeerCard.vue'
import StyleCard from '@/components/StyleCard.vue'

export default {
  name: 'Data',
  components: {
    BreweryCard,
    BeerCard,
    StyleCard
  },
  data : () => {
    return {
      loading : null,
      header : '',
      breweries : false,
      styles : false,
      beers: false,
      bearer_token : null
    }
  },
  async beforeCreate () {
    //let data = await this.axios.get('https://brewery-api.herokuapp.com/breweries')
  },
  async created() {
    this.header = "Breweries"
    let token = await login()
    this.bearer_token = token
    this.mountBreweries()
  },
  mounted () {

  },
  methods: {
    mountBreweries() {
      this.header = "Breweries"
      this.breweries = true;
      this.styles = false;
      this.beers = false;
    },
    mountBeers() {
      this.header = "Beers"
      this.breweries = false;
      this.styles = false;
      this.beers = true;
    },
    mountStyles() {
      this.header = "Styles"
      this.breweries = false;
      this.styles = true;
      this.beers = false;
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
