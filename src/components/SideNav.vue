<template>
  <nav id="sidebar" class="navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav flex-column">
        <router-link class="nav-item active" to="/">
          <a class="nav-link align-middle mx-auto w-100">Dashboard</a>
        </router-link>
        <router-link class="nav-item" to="/data">
          <a class="nav-link align-middle mx-auto w-100">Data</a>
        </router-link>
        <router-link class="nav-item" to="/architecture">
          <a class="nav-link align-middle mx-auto w-100">Architecture</a>
        </router-link>
        <router-link class="nav-item" to="/contribute">
          <a class="nav-link align-middle mx-auto w-100">Contribute</a>
        </router-link>
      </ul>
    </div>
  </nav>
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
  z-index: 1000;
}
#sidebar {
  padding: 0px;
  display: flex;
  width: 220px;
  background-color:#f5f5f5;
  float: left;
  overflow-y:auto;
  overflow-x:hidden;
}

#sidebar .nav-item{
  display: inline-block;
  width: 100%;
}

a {
  text-decoration: none;
}
.nav-item :hover{
  background-color: #6C7A89;
}

@media only screen and (min-width: 600px) {
  #sidebar{
    height: calc(100vh - 60px);
  }
  #navbarNav{
    padding: 15px;
    height: 100%;
  }
  .navbar-nav{
    width: 100%;
    height: 100%;
  }
}
@media only screen and (max-width: 600px) {

  #sidebar .nav-item{
    width: auto;
  }
  #sidebar {
    min-width: 100vw;
    max-width:100vw;
  }
}

</style>
