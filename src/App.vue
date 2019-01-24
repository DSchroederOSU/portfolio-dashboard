<template>
  <div id="app">
    <TopNav/>
    <SideNav/>
    <router-view/>
  </div>
</template>

<script>
// @ is an alias to /src

import SideNav from '@/components/SideNav.vue'
import TopNav from '@/components/TopNav.vue'

export default {
  name: 'Dashboard',
  components: {
    SideNav,
    TopNav
  }
}
</script>

<style lang="scss">
body {
  margin-top: 60px;
  height: 100vh;
}

#app{
  height: 100%;
}
</style>
