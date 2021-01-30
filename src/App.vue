<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
   
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
#app {
  font-family: "Montserrat",sans-serif !important;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  font-family: "Montserrat",sans-serif !important;
  background-color: #EAECF2  !important;
  color: #4a4a4a;
  font-size: 1rem;
  line-height: 30px;
}
*, *::before, *::after {
  box-sizing: inherit;
}
</style>
