<template>
  <div id="sidebar">
     <div class="col-md-12">
       <ul class="nav nav-pills ">
          <li class="nav-item" onclick="dashboard()">
            <a class="nav-link active">Dashboard</a>
          </li>
          <li class="nav-item" onclick="architecture()">
            <a class="nav-link">Architecture</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Page 3</a>
          </li>
       </ul>
     </div>
   </div> <!--/end content-->
</template>

<script>
export default {
  name: 'SideNav',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#sidebar {
  padding-top: 5vh;
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

#sidebar li {
  width: 100%;
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
