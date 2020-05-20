<template>
  <div id="app">
    <Electorate />
  </div>
</template>

<script>
import Electorate from './components/Electorate.vue'

export default {
  name: 'App',
  components: {
    Electorate
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  margin: 0px;
}

body {
  margin: 0 !important;
  min-height: 100vh;
  background: linear-gradient( rgba(0, 0, 0, 0.25), rgba(0, 0, 0, 0.25) ), url(./assets/beach.jpg);
  background-size: cover;
  background-attachment: fixed;
  background-position: center center;
  background-repeat: no-repeat;
}
</style>
