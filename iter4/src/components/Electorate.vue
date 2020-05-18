<template>
  <div class='Electorate'>
    <h1>Kelston Electorate 2017</h1>
    <button class="button button1" v-on:click="getElectorateData"><span>Get Electorate Data </span></button>
    <div class="container">{{ electorateDataList }}</div>
  </div>
</template>

<script>
export default {
  name: 'Electorate',
  data () {
    return {
      electorateDataList: 'Kelston electorate JSON data'
    }
  },
  methods: {
    getElectorateData () {
      fetch('/electorate.json')
        .then(response => response.json())
        .then(data => (this.electorateDataList = data))
    }
  }
}
</script>

<style scoped>
h1 {
  margin: 0 0 15px;
  padding: 60px 0 0;
  color: rgba(255, 255, 255, 0.8);
}

.button {
  background-color: #4CAF50; /* Green */
  color: white;
  border: none;
  border-radius: 10px;
  padding: 20px 30px;
  font-size: 1em;
  margin: 0 0 15px;
  transition: all 0.5s;
  cursor: pointer;
}

.button span {
  display: inline-block;
  position: relative;
  transition: 0.5s;
}

.button span:after {
  content: '\00bb';
  position: absolute;
  opacity: 0;
  top: 0;
  right: -20px;
  transition: 0.5s;
}

.button:hover span {
  padding-right: 25px;
}

.button:hover span:after {
  opacity: 1;
  right: 0;
}

.button:hover {
  background-color: #4CAF50; /* Green */
  color: white;
  border: none;
  border-radius: 10px;
  padding: 20px 33px;
  font-size: 16px;
  margin: 0 0 15px;
  box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
}

.button:active {
  background-color: #3e8e41;
  transform: translateY(3px);
  transition: 0.15s;
}

button:focus {
  outline:0;
}

.container {
 background-color: rgba(255, 255, 255, .15);
 backdrop-filter: blur(5px);
 width: 40%;
 margin: auto;
 padding: 10px;
 border-radius: 5px;
}
</style>
