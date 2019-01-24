<template>
  <div>
    <TopNav/>
    <SideNav/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
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
