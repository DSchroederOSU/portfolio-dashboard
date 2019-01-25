<template>
  <div class="widget">
    <i class="fa widget-icon" aria-hidden="true"></i>
    <div class="widget-text-container">
      <span class="value-span animate-count" v-bind:data-to="`${this.value}`" v-bind:data-speed="`${this.speed}`"></span>
      <span class="title-span">{{title}}</span>
    </div>

  </div>
</template>
<script>

export default {
  name: 'TrackerWidget',
  props: ['value', 'title', 'speed'],
  data : () => {
    return {

    }
  },
  async created() {

  },
  async mounted () {

  },
  methods: {

  }


}
</script>
<style scoped lang="scss">
.widget {
  min-width: 120px;
  overflow: hidden;
  padding: 30px 20px;
  margin: 0px;
  border-radius: 2px;
  box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);
}
.widget-text-container {
  margin: 0;
  line-height: 0.8;
  text-align: right;
  font-size: 45px;
  font-weight: 300;
  color: #fff;
}
.value-span {
  display: block;
  text-align: right;
  font-size: 45px;
  font-weight: 300;
  color: #fff;
}
.title-span {
  display: block;
  padding-top: 20px;
  text-align: right;
  font-size: 20px;
  font-weight: 300;
  color: #fff;
}
.widget-icon {
  position: absolute;
  bottom: -20%;
  left: -5%;
  font-size: 100px;
  width:100px;
  height: 100px;
  color: rgba(255, 255, 255, 0.15);
}
</style>
