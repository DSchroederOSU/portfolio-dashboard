<template>
  <nav class="navbar fixed-top navbar-light bg-dark">
    <a class="navbar-brand">
      Administrative Dashboard
    </a>
  </nav>
</template>

<script>
export default {
  name: 'TopNav',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

nav{
  height: 60px;
}
nav > a{
  color: #BDC3C7 !important;
}

</style>
