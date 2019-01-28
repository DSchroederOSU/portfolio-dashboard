<template>
  <nav id="sidebar" class="w-100 p-0 navbar navbar-expand-lg navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav flex-column">
        <div id="user-container" style="height: 20vh; text-align: center; mb-1">
          <img src="../assets/circled_user_female1600.png" class="mx-auto d-flex h-75"/>
          <span id="name-tag" class="w-100 d-block">Susan Appleseed</span>
          <span id="online" class="w-100 d-block">Online</span>
        </div>
        <router-link class="nav-item active" data-toggle="collapse" data-target="#navbarNav" to="/">
          <a class="nav-link align-middle mx-auto w-100">Dashboard</a>
        </router-link>
        <router-link class="nav-item" data-toggle="collapse" data-target="#navbarNav" to="/data">
          <a class="nav-link align-middle mx-auto w-100">Data</a>
        </router-link>
        <router-link class="nav-item" data-toggle="collapse" data-target="#navbarNav" to="/architecture">
          <a class="nav-link align-middle mx-auto w-100">Architecture</a>
        </router-link>
        <router-link class="nav-item" data-toggle="collapse" data-target="#navbarNav" to="/contribute">
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

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#name-tag {
  color: white;
}

#online {
  color: #26C281;
}

#sidebar {
  z-index: 1000;
}

#sidebar {
  padding: 0px;
  display: flex;
  background-color: #343a40!important;
  float: left;
  overflow-y:auto;
  overflow-x:hidden;

}

#sidebar .nav-item{
  display: inline-block;
  width: 100%;
}
a {
  color: #BDC3C7 !important;
  text-decoration: none;
}
.nav-item :hover{
  background-color: #6C7A89;
}

@media (min-width: 768px) and (max-width: 1024px) {

  //CSS

}

@media only screen and (min-width: 735px) {
  #sidebar{
    height: 100vh;
  }
  #navbarNav{
    height: 100%;
  }
  .nav-item {
    padding: 0px;
  }
  #navbarNav .nav-link {
    padding-left: 35px !important;
    padding: 15px;
  }
  .navbar-nav{
    width: 100%;
    height: 100%;
  }

}

// Mobile devices
@media only screen and (max-width: 768px) {
  #user-container{
    display: none;
  }
  #sidebar{
    z-index: 100;
    position: absolute;
    padding: 10px !important;
    background-color: #343a40!important;
  }
  #sidebar .nav-item{
    width: auto;
  }
  #sidebar {
    min-width: 100vw;
    max-width:100vw;
  }
  #navbarNav{
    padding:10px;
  }
}

</style>
