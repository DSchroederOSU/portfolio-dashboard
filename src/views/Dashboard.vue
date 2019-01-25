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
    <div class="row mt-4 w-100">
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
  </div>
</template>

<script>
import {getAllDocuments} from '../data_service.js'
import TrackerWidget from '@/components/TrackerWidget.vue'
export default {
  name: 'Dashboard',
  props: ['token'],
  components: {
    TrackerWidget,
  },
  data : () => {
    return {
      api_commits : '',
      src_commits : '',
      db_objects : '',
      bearer_token : null
    }
  },
  async created () {
    console.log(this.token)
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
    });
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
