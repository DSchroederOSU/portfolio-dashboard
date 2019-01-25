<template>
  <div >
     <i class="fa fa-globe" aria-hidden="true"></i>
  </div>
</template>


<script>

export default {
  name: 'TrackerWidget',
  props: ['token'],
  data : () => {
    return {
      beers : null
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
</style>
