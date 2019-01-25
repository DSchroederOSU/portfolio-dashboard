<template>
  <div>
    <ul class="list-group" v-for="item in styles">
      <li class="list-group-item">{{item.name}}</li>
    </ul>
  </div>
</template>


<script>
import {getStyles} from '../data_service.js'

export default {
  name: 'StyleCard',
  props: ['token'],
  data : () => {
    return {
      styles : null
    }
  },
  async created() {
    this.fetchStyles(this.token);
  },
  async mounted () {
  },
  methods: {
    async fetchStyles(token) {
      let styles = await getStyles(token)
      this.styles = styles;
    }
  }


}
</script>
<style scoped lang="scss"> 
</style>
