<template>
  <div class="hello">
    <h1>My Election Data App</h1>
    <button v-on:click="getElectorateData">Get Electorate Data</button>
    <div>{{electorateDataList}}</div>
  </div>
</template>

<script>
export default {
  name: "Electorate",
  data() {
    return {
      electorateDataList: []
    };
  },
  methods: {
    getElectorateData() {
      fetch("electorate.json")
        .then(response => response.json())
        .then(data => (this.electorateDataList = data));
    }
  }
};
</script>

<style scoped>
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
