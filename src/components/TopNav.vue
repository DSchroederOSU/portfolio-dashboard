<template>
  <nav class="navbar fixed-top navbar-light bg-dark">
    <div class="label-container">
      <span class="align-middle mx-auto w-100">Administrative Dashboard</span>
    </div>
    <div id="user-icons" class="d-flex flex-row justify-content-end mr-4">

      <span class="align-middle arrow-down mt-4"></span>
      <img src="../assets/circled_user_female1600.png" class=""/>
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
  position: static !important;
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
#user-icons{

  overflow: hidden;
}
#user-icons img {
  width: 50px;
  height: 50px;
  max-width:100%;
}
.arrow-down {
	border-color: #BDC3C7 transparent;
	border-style: solid;
	border-width: 8px 8px 0px 8px;
	height: 0px;
	width: 0px;
}

</style>
