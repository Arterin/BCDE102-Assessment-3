<template>
  <div id="app">
    <Electorate />
  </div>
</template>

<script>
import Electorate from './components/Electorate.vue'

export default {
  name: "App",
  components: {
    Electorate
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
