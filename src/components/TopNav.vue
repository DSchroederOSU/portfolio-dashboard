<template>
  <!--
  <nav class="navbar fixed-top navbar-light bg-dark">
    <div class="label-container">
      <span class="align-middle mx-auto w-100">Administrative Dashboard</span>
    </div>
    <div id="user-icons" class="">
      <div class="d-flex justify-content-end">
        <span class="arrow-down ml-2 mt-4 "></span>
        <img src="../assets/circled_user_female1600.png" class="mr-4"/>
      </div>
    </div>
  </nav>
  -->
  <div class="nav-wrapper">
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark justify-content-end">
      <a class="navbar-brand" href="#">Home</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
          <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse ml-auto flex-grow-0" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li id="user-dropdown" class="nav-item dropdown">
            <a class="nav-link dropdown-toggle p-0" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <div id="user-icons" class="">
                <span class="arrow-down ml-2 mt-4 "></span>
                <img src="../assets/circled_user_female1600.png" class="mr-4"/>
              </div>
            </a>
            <div class="dropdown-menu dropdown-menu-lg-right mt-2" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="#">Action</a>
              <a class="dropdown-item" href="#">Another action</a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">Something else here</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>

  </div>


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
  vertical-align: middle;
  padding: 0px;
}

.nav-wrapper {
  padding: 10px;
  background-color: #343a40!important;
}

span{
  display: inline-block;
  font-size: 0.8vw;
  color: #BDC3C7 !important;
}
.dropdown-toggle::after {
    display:none ;
}

.label-container{
  text-align: center;
  min-width: 220px;
  max-width: 220px;
  position: relative;
  display: block;
  border-right: 2px solid black;
}
#user-icons div{
  position: relative;
  width: auto;
  height: auto;
  padding: 2px;
  border-radius: 10px;
}
#user-dropdown div:hover{
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 10px 2px rgba(65, 70, 73, 0.4);
  box-shadow: 0px 0px 10px 2px rgba(65, 70, 73, 0.4);
  background-color: #414649;
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
