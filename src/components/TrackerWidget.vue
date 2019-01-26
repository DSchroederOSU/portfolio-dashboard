<template>
  <div class="widget">
    <i class="fa widget-icon" aria-hidden="true"></i>
    <div class="widget-text-container">
      <span class="value-span">
        <animated-number
          :value="value"
          :formatValue="formatToPrice"
          :duration="1000"
        />
      </span>
      <span class="title-span">{{title}}</span>
    </div>
  </div>
</template>
<script>
import AnimatedNumber from "animated-number-vue";

export default {
  name: 'TrackerWidget',
  components: {
    AnimatedNumber
  },
  props: ['value', 'title', 'speed'],
  data : () => {
    return {

    }
  },
  mounted() {

    $(`${this.$el.id}`).prop('Counter', 0).animate({
      Counter: parseInt(this.value)
    },
    {
      duration: parseInt(this.speed),
      easing: 'swing',
      step: function (now) {
        $(this).text(Math.ceil(now));
      }
    });
  },
  methods: {
    formatToPrice(value) {
      return `${value.toFixed(0)}`;
    }
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
