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
    <div v-show="loaded">

      <div class="row mt-4 w-100" >
        <div class="col-md-3">
          <TrackerWidget :value='`${this.db_objects}`' :title='`API Objects`' :speed='`1500`'></TrackerWidget>
        </div>
        <div class="col-md-3">
          <TrackerWidget :value='`${this.src_commits}`' :title='`Commits`' :speed='`1500`'></TrackerWidget>
        </div>
        <div class="col-md-3">
          <TrackerWidget :value='`${this.src_commits}`' :title='`Commits`' :speed='`1500`'></TrackerWidget>
        </div>
        <div class="col-md-3">
          <TrackerWidget :value='`${this.src_commits}`' :title='`Commits`' :speed='`1500`'></TrackerWidget>
        </div>
      </div>


        <div class="row" v-if="loaded">
          <div class="col-md-6">
            <div class="Chart">
              <h3 style="text-align:center;">A Line Chart of Random Data</h3>
              <h5 style="text-align:center;">Because Why Not?</h5>
              <chart />
            </div>
          </div>
          <div class="col-md-6">
            <div class="Chart">
              <h3 style="text-align:center;">A Dynamically Rendered Chart</h3>
              <h5 style="text-align:center;">Because Why Not?</h5>
              <chart />
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
import {getAllDocuments} from '../data_service.js'
import TrackerWidget from '@/components/TrackerWidget.vue'
import Chart from '@/components/Chart.vue'
export default {
  name: 'Dashboard',
  props: ['token'],
  components: {
    TrackerWidget,
    Chart
  },
  data : () => {
    return {
      api_commits : '',
      src_commits : '',
      db_objects : '',
      bearer_token : null,
      loaded: false
    }
  },
  async created () {
    let api_commits = await this.axios.get('https://api.github.com/repos/DSchroederOSU/Brewery_API/contributors')
    let src_commits = await this.axios.get('https://api.github.com/repos/DSchroederOSU/portfolio-dashboard/contributors')
    let db_objects = await getAllDocuments(this.token)
    this.db_objects = db_objects
    this.api_commits = api_commits.data[0].contributions
    this.src_commits = src_commits.data[0].contributions
  },
  updated() {
    this.$nextTick(() => {
      $('.animate-count').each(function () {
          $(this).prop('Counter', 0).animate({
              Counter: $(this).data('to')
          }, {
              duration: $(this).data('speed'),
              easing: 'swing',
              step: function (now) {
                  $(this).text(Math.ceil(now));
              }
          });
      });

      //set random background color
      let colors = ['#ef5350', '#ffa726', '#66bb6a', '#29b6f6']
      let icons = ['fa-folder', 'fa-cube', 'fa-tasks', 'fa-globe-americas ']
      $('.widget-icon').each(function () {
        $(this).addClass(icons.pop());
      });

      $('.widget').each(function () {
        $(this).css("background-color", colors.pop());
      });
      this.loaded = true;
    });
  },
  async mounted () {

  },
  methods: {
      dashboard: function () {
        console.log("Dashboard")
        $('#header').css('background-color', 'red');
      },
      filldata () {

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
    height: 50vh;
    padding: 20px;
    box-shadow: 0px 0px 20px 2px rgba(0, 0, 0, .4);
    border-radius: 20px;
    margin: 50px 0;
  }
</style>
