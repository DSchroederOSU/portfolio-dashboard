<template>
<div >
  <div class="alert alert-success w-100 d-none" style="position: relative; top: -20px;" role="alert">
    Beer Successfuly Added!
  </div>
  <div id="form-row" class="row">
    <div id="breweryForm" class="col-md-6 mx-auto">
      <h3>Step 1: Add The Brewery</h3>
      <form @submit.prevent="submitBrewery">
         <div class="form-group">
           <label for="inputBrewery">Name</label>
           <input type="text" class="form-control" v-model="brewery_object.name" id="inputBrewery" placeholder="" required>
         </div>
         <div class="form-row">
           <div class="form-group col-md-12 ">
             <label for="inputAddress">Address</label>
             <input type="text" class="form-control" v-model="brewery_object.address" id="inputAddress" placeholder="Address">
           </div>
            <div class="form-group col-md-4">
              <label for="inputCity">City</label>
              <input type="text" class="form-control" v-model="brewery_object.city" id="inputCity" placeholder="City" required>
            </div>
            <div class="form-group col-md-4">
              <label for="inputState">State</label>
              <input type="text" class="form-control" v-model="brewery_object.state" id="inputState" placeholder="State" required>
            </div>
            <div class="form-group col-md-4">
              <label for="inputZipcode">Zipcode</label>
              <input type="text" class="form-control" v-model="brewery_object.zip" id="inputZipcode" placeholder="Zip" required>
            </div>
          </div>
          <div class="form-group w-50">
            <label for="inputPhone">Phone</label>
            <input type="text" class="form-control" v-model="brewery_object.phone" id="inputPhone" placeholder="">
          </div>
          <h5 class="mt-3"> Social Links  </h5>
          <div class="form-row">
            <div class="form-group col-md-4">
              <label for="inputWebsite">Website</label>
              <input type="text" class="form-control" v-model="brewery_object.website" id="inputWebsite" placeholder="https://example.com">
            </div>
             <div class="form-group col-md-4">
               <label for="inputFacebook">Facebook</label>
               <input type="text" class="form-control" v-model="brewery_object.facebook_url" id="inputFacebook" placeholder="https://example.com">
             </div>
             <div class="form-group col-md-4">
               <label for="inputTwitter">Twitter</label>
               <input type="text" class="form-control" v-model="brewery_object.twitter_url" id="inputTwitter" placeholder="https://example.com">
             </div>
           </div>
           <button class="btn btn-primary" type="submit">Submit</button>
      </form>

    </div>
    <div id="styleForm" class="col-md-6 mx-auto d-none">
      <h3>Step 2: Add The Style of Beer</h3>
      <form @submit.prevent="submitStyle">
         <div class="form-group">
           <label for="inputStyle">Style</label>
           <input type="text" class="form-control" v-model="style_object.name" id="inputStyle" placeholder="IPA">
         </div>
         <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    <div id="beerForm" class="col-md-6 mx-auto d-none">
      <h3>Step 3: Add The Beer</h3>
      <form @submit.prevent="submitBeer">
         <div class="form-group">
           <label for="inputBeer">Beer</label>
           <input type="text" class="form-control" v-model="beer_object.name" id="inputBeer" placeholder="Name of Beer" required>
         </div>
         <div class="form-group">
           <label for="inputDescription">Description</label>
           <textarea class="form-control" id="inputDescription" rows="3" v-model="beer_object.description" required></textarea>
         </div>
         <div class="form-row">
           <div class="form-group col-md-4">
             <label for="inputIbu">IBU</label>
             <input type="text" class="form-control" v-model="beer_object.ibu" id="inputIbu" required>
           </div>
           <div class="form-group col-md-4">
             <label for="inputAbv">ABV</label>
             <input type="text" class="form-control" v-model="beer_object.abv" id="inputAbv" required>
           </div>
          </div>
         <button type="submit" class="btn btn-primary">Submit</button>
      </form>
     </div>
   </div>
   <div class="row">
     <hr class="mt-5" width=75%  align=CENTER>
     <div class="col-md-6 mt-3 mx-auto">

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
      untappedURL: '',
      brewery_object: {
        name: null,
        website: null,
        facebook_url: null,
        twitter_url:null,
        phone: null,
        address: null,
        city: null,
        state: null,
        zip: null
      },
      style_object : {
        name: null
      },
      beer_object : {
        name: null,
        description: null,
        ibu: null,
        abv:null,
        brewery:null,
        style:null,
      }

    }
  },
  async beforeCreate () {

  },
  async mounted () {


  },
  methods: {
    async parseData () {
      await getBeerInfo(`https://cors-anywhere.herokuapp.com/${this.untappedURL}`)
      $('.alert').removeClass('d-none')
    },

    submitBrewery () {
      $('#breweryForm').addClass('d-none')
      $('#styleForm').removeClass('d-none')
    },
    submitStyle () {
      $('#styleForm').addClass('d-none')
      $('#beerForm').removeClass('d-none')
    },
    submitBeer () {

      this.beer_object.brewery = this.brewery_object.name;
      this.beer_object.style = this.style_object.name;
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  #form-row{
    min-height: 50vh;
    overflow-x: hidden;
  }
  .form-group {
    margin-bottom: 10px;
  }

  #styleForm{
  }
</style>
