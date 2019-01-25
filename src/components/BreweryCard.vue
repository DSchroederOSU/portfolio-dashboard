<template>
  <div>
    <div v-for="item in breweries">
      <div class="card" style="width: 20vw;">
        <div class="card-body">
          <h5 class="card-title">{{item.name}}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{item.address}}</h6>
          <a v-bind:href="`${item.website}`" class="card-text" target="_blank">{{item.website}}</a>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import {getBreweries} from '../data_service.js'

export default {
  name: 'BreweryCard',
  props: ['token'],
  data : () => {
    return {
      breweries : null
    }
  },
  async created() {
    this.fetchBreweries(this.token);
  },
  async mounted () {
  },
  methods: {
    async fetchBreweries(token) {
      let breweries = await getBreweries(token)
      this.breweries = breweries;
    }
  }


}
</script>
