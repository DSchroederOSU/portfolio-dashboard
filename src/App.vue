<template>
  <div id="app">
    <div class="row m-0">
      <div id="left-col" class="col-md-auto p-0">
        <SideNav/>
      </div>
      <div id="right-col" class="p-0">
        <div id="content-wrapper" class="d-flex flex-column">
          <TopNav id="topnav"/>
          <router-view id="viewport" :token='`${this.bearer_token}`'/>
        </div>
      </div>
    </div>


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
#content-wrapper {
    max-height: 100vh;
}
#right-col{
  width: 87vw;
}
#left-col{
  width: 13vw;
}
#viewport{
  overflow: auto;
  padding: 30px;
}

@media only screen and (max-width: 768px) {
  #topnav {
    display: none;
  }
  #left-col{
    height: 60px;

  }
  #viewport{
    position: absolute;
    top: 60px;
    left: 0px;
    overflow-x: scroll;
    height: 100%;
    width: 100vw;
    padding: 30px;
  }
}
</style>
