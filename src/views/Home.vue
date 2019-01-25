<template>
  <div class="view-container">
    <div class="row mt-4">
      <div class="col-sm-4">
        <h1 id="header">The Brewery Emporium</h1>
        <h4>Created by: <a href="https://github.com/DSchroederOSU/Brewery_API">Daniel Schroeder</a></h4>
        <h4>Hosted on: <a href="https://portfolio-dashboard-1.herokuapp.com/">Heroku</a></h4>
        <h4>Commits: <a href="https://github.com/DSchroederOSU/portfolio-dashboard/commits/master">{{src_commits}}</a></h4>
      </div>
      <div class="col-sm-4 mx-auto">
      <h2 class="mt-5">Powered By:</h2>
      </div>
      <div class="col-sm-4">
        <h1 id="header">Brewery API</h1>
        <h4>Created by: <a href="https://github.com/DSchroederOSU/Brewery_API">Daniel Schroeder</a></h4>
        <h4>Hosted on: <a href="https://brewery-api.herokuapp.com/">Heroku</a></h4>
        <h4>Commits: <a href="https://github.com/DSchroederOSU/Brewery_API/commits/master">{{api_commits}}</a></h4>
      </div>
    </div>


  </div>
</template>

<script>

export default {
  name: 'Dashboard',
  components: {

  },
  data : () => {
    return {
      api_commits : '',
      src_commits : '',
    }
  },
  async beforeCreate () {
    let api_commits = await this.axios.get('https://api.github.com/repos/DSchroederOSU/Brewery_API/contributors')
    let src_commits = await this.axios.get('https://api.github.com/repos/DSchroederOSU/portfolio-dashboard/contributors')
    this.api_commits = api_commits.data[0].contributions
    this.src_commits = src_commits.data[0].contributions
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
