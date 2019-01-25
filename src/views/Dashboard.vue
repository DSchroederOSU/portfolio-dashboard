<template>
  <div class="view-container">
    <div class="row mt-4">
      <div class="col-sm-8">
        <h1 id="header">The Brewery Emporium</h1>
        <h5>Created by: <a href="https://github.com/DSchroederOSU/Brewery_API">Daniel Schroeder</a></h5>
        <h5>Hosted on: <a href="https://portfolio-dashboard-1.herokuapp.com/">Heroku</a></h5>
        <h5>API: <a href="https://github.com/DSchroederOSU/Brewery_API">Custom Brewery API</a></h5>
      </div>
    </div>
  <div class="row mt-4">
    <div class="col-md-3">
    </div>
    <div class="col-md-3">
    </div>
    <div class="col-md-3">
    </div>
    <div class="col-md-3">
    </div>
  </div>
<h5>Commits: <a href="https://github.com/DSchroederOSU/portfolio-dashboard/commits/master">{{src_commits}}</a></h5>
<TrackerWidget></TrackerWidget>


  </div>
</template>

<script>
import TrackerWidget from '@/components/TrackerWidget.vue'
export default {
  name: 'Dashboard',
  components: {
    TrackerWidget,
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
