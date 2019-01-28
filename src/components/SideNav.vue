<template>
  <nav id="sidebar" class="w-100 p-0 navbar navbar-expand-md navbar-light bg-light">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <div id="user-container" class="mb-3 mt-5 w-100 text-center">
        <div class="d-block h-50">
            <img id="profile-image" src="../assets/circled_user_female1600.png" class="img-fluid"/>
        </div>
        <div class="">
            <span id="name-tag" class="w-100 d-block">Susan Appleseed</span>
        </div>
        <div class="">
          <span id="online" class="w-100 d-block">Online</span>
        </div>
      </div>
      <div id="menu" class="w-100">
        <ul class="navbar-nav flex-column">
          <router-link class="nav-item active" data-toggle="collapse" data-target="#navbarNav" to="/">
            <a class="nav-link align-middle m-0 pl-4 w-100">Dashboard</a>
          </router-link>
          <router-link class="nav-item" data-toggle="collapse" data-target="#navbarNav" to="/data">
            <a class="nav-link align-middle m-0 pl-4 w-100">Data</a>
          </router-link>
          <router-link class="nav-item" data-toggle="collapse" data-target="#navbarNav" to="/architecture">
            <a class="nav-link align-middle m-0 pl-4 w-100">Architecture</a>
          </router-link>
          <router-link class="nav-item" data-toggle="collapse" data-target="#navbarNav" to="/contribute">
            <a class="nav-link align-middle m-0 pl-4 w-100">Contribute</a>
          </router-link>
        </ul>
      </div>

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

a {
  color: #BDC3C7 !important;
  text-decoration: none;
}


@media only screen and (min-width: 768px) {
  #sidebar .nav-item{
    display: inline-block;
    width: 100%;
  }

  .nav-item :hover{
    background-color: #6C7A89;
  }
  #profile-image{
    max-width: 100px;
    max-height: 100%;
  }
  #user-container span{


  }
  #name-tag {
    font-size:calc(6px + 0.5vw);
    color: white;
  }
  #online {
    font-size:calc(8px + 0.5vw);
    color: #26C281;
  }
  #user-container{
    min-height: 200px;
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  #menu{
    display: flex;
    flex-direction: column;
    align-items: stretch;
  }
  #navbarNav{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
  }
  #sidebar{
    min-height: 400px;
    height: 100vh;
    z-index: 1000;
    background-color: #343a40!important;
  }
  /*
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
  */

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
