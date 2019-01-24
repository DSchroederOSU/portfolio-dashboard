<template>
  <div>
    <TopNav/>
    <SideNav/>
    <h1>Travis Deploy</h1>
  </div>
</template>

<script>
// @ is an alias to /src

import SideNav from '@/components/SideNav.vue'
import TopNav from '@/components/TopNav.vue'

export default {
  name: 'home',
  components: {
    SideNav,
    TopNav
  }
}
</script>
