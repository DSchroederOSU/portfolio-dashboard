<template>
  <div class="view-container">

    <!-- <span v-on:click="dashboard">Hello</span> -->
    <div class="row mt-4">
      <div class="col-sm-4">
        <h1 id="header">Brewery API</h1>
        <h4>Created by: <a href="https://github.com/DSchroederOSU/Brewery_API">Daniel Schroeder</a></h4>
        <h4>Hosted on <a href="https://brewery-api.herokuapp.com/">Heroku</a></h4>
      </div>
      <div class="col-sm-3">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Repository Commits</h5>
            <h3 class="card-text">{{commits}}</h3>
            <a href="https://github.com/DSchroederOSU/Brewery_API/commits/master" class="btn btn-primary">View Commits</a>
          </div>
        </div>
      </div>

    </div>

    <div class="Chart">
      <h1 style="text-align:center;">Line</h1>
 
    </div>
  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  components: {
    LineChart
  },
  data : () => {
    return {
      commits : ''
    }
  },
  async beforeCreate () {
    let commits = await this.axios.get('https://api.github.com/repos/DSchroederOSU/Brewery_API/contributors')
    this.commits = commits.data[0].contributions
  },
  async mounted () {

  },
  methods: {
      dashboard: function () {
        console.log("Dashboard")
        $('#header').css('background-color', 'red');
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
