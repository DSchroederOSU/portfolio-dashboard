<template>
  <div class="view-container">
    <ul class="nav">
      <li class="nav-item" v-on:click="breweries">
        <a class="nav-link active" href="#">Breweries</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Beers</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Styles</a>
      </li>
    </ul>
    <div class="mt-3 ml-3">
      <h1 id="header">{{header}}</h1>
      {{data}}
    </div>
    <!-- <span v-on:click="dashboard">Hello</span> -->



  </div>
</template>

<script>
import {login} from '../authenticate.js'

export default {
  name: 'Data',
  components: {
  },
  data : () => {
    return {
      header : '',
      data : null
    }
  },
  async beforeCreate () {
    let data = await this.axios.get('https://brewery-api.herokuapp.com/breweries')
    console.log(login())
    this.data = data
  },
  async mounted () {

  },
  methods: {
    breweries: function () {
      this.header = "Breweries"
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
