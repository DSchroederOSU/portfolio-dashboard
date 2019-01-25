<template>
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
            <div class="card" style="width: 100%;">
              <div class="card-body ml-5">
                <h5 class="card-title">{{beer.name}}</h5>
                <h6 class="card-subtitle mb-2 text-muted">By: {{beer.brewery.name}}</h6>
                <h6 class="card-subtitle mb-2 text-muted">ABV: {{beer.abv}}</h6>
                <h6 class="card-subtitle mb-2 text-muted">IBU: {{beer.ibu}}</h6>
                <p class="card-text">{{beer.description}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import {getBeers} from '../data_service.js'

export default {
  name: 'BeerCard',
  props: ['token'],
  data : () => {
    return {
      beers : null
    }
  },
  async created() {
    this.fetchBeers(this.token);
  },
  async mounted () {
  },
  methods: {
    async fetchBeers(token) {
      let beers = await getBeers(token);
      this.beers = beers;
    }
  }


}
</script>
<style scoped lang="scss">
.card {
  border: 0px !important;
  border-top: 1px solid rgba(0, 0, 0, 0.125) !important;
  border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}
</style>
