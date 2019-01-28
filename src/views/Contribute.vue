<template>
  <div class="row">
    <div class="col-md-6">
      <form>
       <div class="form-group">
         <label for="exampleInputEmail1">Email address</label>
         <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
         <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
       </div>
       <div class="form-group">
         <label for="exampleInputPassword1">Password</label>
         <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
       </div>
       <div class="form-group form-check">
         <input type="checkbox" class="form-check-input" id="exampleCheck1">
         <label class="form-check-label" for="exampleCheck1">Check me out</label>
       </div>
       <button type="submit" class="btn btn-primary">Submit</button>
     </form>
     <hr width=75%  align=CENTER>
     <h5>Or input an Untapped URL and let the scraper work it's magic!</h5>
     <form>
      <div class="form-group">
        <label for="untappedURL">URL</label>
        <input type="text" class="form-control" id="untappedURL" v-model="untappedURL" placeholder="https://untappd.com/b/brouwerij-lindemans-oude-kriek-cuvee-rene/39549">
      </div>
    </form>
    <button class="btn btn-primary" v-on:click="parseData">Scrape</button>
    </div>
  </div>

</template>

<script>

import {getBeerInfo} from '../webscraper.js'

export default {
  name: 'Contribute',
  components: {

  },
  data : () => {
    return {
      untappedURL: ''
    }
  },
  async beforeCreate () {

  },
  async mounted () {


  },
  methods: {
    parseData () {

      getBeerInfo(`https://cors-anywhere.herokuapp.com/${this.untappedURL}`)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
