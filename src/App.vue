<template>
  <div id="app">
    <TopNav id="topnav"/>
    <SideNav/>
    <router-view id="viewport" :token='`${this.bearer_token}`'/>
  </div>
</template>

<script>
// @ is an alias to /src

import SideNav from '@/components/SideNav.vue'
import TopNav from '@/components/TopNav.vue'
import {login} from './authenticate.js'
export default {
  name: 'Dashboard',
  components: {
    SideNav,
    TopNav
  },
  data : () => {
    return {
      bearer_token : null
    }
  },
  async created() {
    let token = await login()
    this.bearer_token = token
  },
}
</script>

<style scoped lang="scss">
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
@media only screen and (max-width: 600px) {
  #topnav {
    display: none;
  }
  #viewport{
    position: absolute;
    top: 60px;
    left: 0px;
    overflow: auto;
    height: 100%;
    width: 100vw;
    padding: 30px;
  }
}
</style>
