<template>
  <div class="view-container">
    <div class="row">
      <div class="col-sm-8">
        <h1 id="header">The Brewery Emporium</h1>
        <h5>Created by: <a href="https://github.com/DSchroederOSU/Brewery_API">Daniel Schroeder</a></h5>
        <h5>Hosted on: <a href="https://portfolio-dashboard-1.herokuapp.com/">Heroku</a></h5>
        <h5>API: <a href="https://github.com/DSchroederOSU/Brewery_API">Custom Brewery API</a></h5>
      </div>
    </div>

    <!-- Data -->
    <div v-if="loaded">

      <div class="row mt-4" >
        <div class="col-md-3">
          <TrackerWidget :value="db_objects" :title='`API Objects`' :speed='`1500`'></TrackerWidget>
        </div>
        <div class="col-md-3">
          <TrackerWidget :value='`${src_commits}`' :title='`App Commits`' :speed='`1500`'></TrackerWidget>
        </div>
        <div class="col-md-3">
          <TrackerWidget :value='`${api_commits}`' :title='`API Commits`' :speed='`1500`'></TrackerWidget>
        </div>
        <div class="col-md-3">
          <TrackerWidget :value='`${random_num}`' :title='`Random`' :speed='`1500`'></TrackerWidget>
        </div>
      </div>


        <div class="row" v-if="loaded">
          <div class="col-md-6">
            <div class="Chart">
              <h3 style="text-align:center;">A Line Chart of Random Data</h3>
              <h5 style="text-align:center;">Because Why Not?</h5>
              <chart :height="300" />
            </div>
          </div>
          <div class="col-md-6">
            <div class="Chart" >
              <h3 style="text-align:center;">A Dynamically Rendered Chart</h3>
              <a id="clickme" v-on:click="toggle"><h5 style="text-align:center;">Click Me</h5></a>
              <dynamic-chart v-if="mount_chart" :height="300" :labels='this.labels' :chartdata='this.chartdata' />
            </div>

          </div>
        </div>
    </div>


    <table class="h-75 w-100" v-show="!loaded" style="text-align: center;">
      <tbody>
        <tr>
          <td class="align-middle">
            <div class="spinner-border text-primary mx-auto" style="width:200px; height: 200px;" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {getAllDocuments, getSourceCommits, getAPICommits} from '../data_service.js'
import TrackerWidget from '@/components/TrackerWidget.vue'
import Chart from '@/components/Chart.vue'
import DynamicChart from '@/components/DynamicChart.vue'
export default {
  name: 'Dashboard',
  props: ['token'],
  components: {
    TrackerWidget,
    Chart,
    DynamicChart
  },
  data : () => {
    return {
      api_commits : '',
      src_commits : '',
      db_objects : '',
      loaded: false,
      labels: [],
      chartdata: [],
      random_num: 0,
      mount_chart: false
    }
  },
  async created () {
    this.fetch();
    this.filldata(); 
  },
  updated() {
    this.$nextTick(() => {

      //set random background color
      let colors = ['#ef5350', '#ffa726', '#66bb6a', '#29b6f6']
      let icons = ['fa-folder', 'fa-cube', 'fa-tasks', 'fa-globe-americas ']
      $('.widget-icon').each(function () {
        $(this).addClass(icons.pop());
      });

      $('.widget').each(function () {
        $(this).css("background-color", colors.pop());
      });


    });
  },
  mounted () {

  },
  methods: {
      async fetch () {
        this.loaded = false;
        let src = await getSourceCommits()
        let api = await getAPICommits()
        let db = await getAllDocuments(this.token)
        this.db_objects = db;
        this.api_commits = api;
        this.src_commits = src;
        this.random_num = Math.floor(Math.random() * 2000)
        this.loaded = true;
      },
      toggle () {
        this.mount_chart = !this.mount_chart
        setTimeout(function(){
                this.filldata()
            }.bind(this), 1000);
      },
      filldata () {

          let colors = ['#ef5350', '#ffa726', '#66bb6a', '#29b6f6']
          this.labels = this.shuffle(['January', 'February', 'March', 'April', 'May', 'June', 'July'])
          this.chartdata = Array.from({length: 7}, () => Math.floor(Math.random() * 40))

          this.mount_chart = true;
      },
      // taken from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
      shuffle (array) {
        var currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

          // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;

          // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
      }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#clickme{
  color: #66bb6a;
  cursor: pointer;
  text-decoration: none;
}
#clickme :hover{
  color: grey
}

.view-container{
  height: 100%;
  overflow: hidden;
  padding: 30px;
}

  .Chart {
    height: 45vh;
    padding: 20px;
    box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, .4);
    border-radius: 20px;
    margin: 50px 0;
  }
</style>
