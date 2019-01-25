<template>
  <div id="app">
    <TopNav/>
    <SideNav/>
    <router-view id="viewport"/>
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

}

#viewport{
  position: absolute;
  top: 60px;
  left: 220px;
  overflow: auto;
  height: calc(100% - 60px);
  width: calc(100% - 220px);
  padding: 30px;
}
</style>
