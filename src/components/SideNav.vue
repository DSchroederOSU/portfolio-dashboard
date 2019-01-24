<template>
  <div id="sidebar">
     <ul class="nav">
       <router-link class="nav-item active" to="/">
         <a class="nav-link align-middle mx-auto w-100">Dashboard</a>
       </router-link>
       <router-link class="nav-item" to="/data">
         <a class="nav-link align-middle mx-auto w-100">Data</a>
       </router-link>
       <router-link class="nav-item" to="/architecture">
         <a class="nav-link align-middle mx-auto w-100">Architecture</a>
       </router-link>
     </ul>
   </div> <!--/end content-->
</template>

<script>
export default {
  name: 'SideNav',
  props: {
    msg: String
  },

  mounted () {

 },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#sidebar {
  width: inherit;
  min-width: 220px;
  max-width: 220px;
  background-color:#f5f5f5;
  float: left;
  height:100%;
  position:relative;
  overflow-y:auto;
  overflow-x:hidden;
}

#sidebar .nav-item{
  width: 100%;
}
a {
  text-decoration: none;
}
.nav-link{
  display: inline-block;
  padding: 15px;
}
.nav-item{
  display: block;

}
.nav-item :hover{
  background-color: #6C7A89;
}
</style>
