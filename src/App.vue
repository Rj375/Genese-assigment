<template>
  <div id="app">
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>


<script>
import NavBar from "@/components/Nav";
export default {
   components: {
     NavBar
  }
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
 

  a {
    font-weight: bold;
    color: #2c3e50;
    font-weight: bold;
    padding: 20px;

    &.router-link-exact-active {
      color: #18d37f;
    }
  }

  a:hover{
    color: #fff;
  }
}
</style>
