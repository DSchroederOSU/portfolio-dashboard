<template>
  <nav class="navbar fixed-top navbar-light bg-dark">
    <div class="label-container">
      <span class="align-middle mx-auto w-100">Administrative Dashboard</span>
    </div>

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
  vertical-align: middle;
  padding: 0px;
}
span{
  display: inline-block;
  font-size: 0.8vw;

  color: #BDC3C7 !important;
}
.label-container{
  text-align: center;
  min-width: 220px;
  max-width: 220px;
  position: relative;
  display: block;
  border-right: 2px solid black;
}
</style>
