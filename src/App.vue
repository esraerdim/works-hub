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
  color: #4a4a4a !important;
  font-size: 1rem;
  line-height: 30px;
}
*, *::before, *::after {
  box-sizing: inherit;
}
hr{
  background-color: #f5f5f5;
  border: none;
  display: block;
  height: 2px;
  margin: 1.5rem 0;
}
a:hover{
  text-decoration: none  !important;
}
</style>
