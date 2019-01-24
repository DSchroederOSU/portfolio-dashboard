<template>
  <div>
    <TopNav/>
    <SideNav/>
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
