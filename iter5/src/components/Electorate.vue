<template>
  <div class="Electorate">
    <h1>Kelston Electorate 2017</h1>
    <button class="button button1" @click="showContainer()">
      <span>Get Electorate Data</span>
    </button>
    <div id="container">
      <div v-for="(party, i) in items.partyList" v-bind:key="i">
        <h3 class="party-title">{{ party.partyName }}</h3>
        <p class="party-text">
          Votes: {{ party.votes }}<br />Percentage: {{ party.votePercentage }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import electorateDataList from "./json/electorate.json";

export default {
  name: "Electorate",
  data() {
    return {
      items: electorateDataList
    };
  },

  methods: {
    showContainer() {
      document.getElementById("container").style.transform = "translateX(0px)";
      document.getElementById("container").style.opacity = 1;
    }
  }
};
</script>

<style scoped>
h1 {
  margin: 0 0 15px;
  padding: 60px 0 0;
  color: rgba(255, 255, 255, 0.8);
}

/* button */
.button {
  background-color: #4caf50; /* Green */
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
  content: "\00bb";
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
  background-color: #4caf50; /* Green */
  color: white;
  border: none;
  border-radius: 10px;
  padding: 20px 33px;
  font-size: 16px;
  margin: 0 0 15px;
  box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24),
    0 17px 50px 0 rgba(0, 0, 0, 0.19);
}

.button:active {
  background-color: #3e8e41;
  transform: translateY(3px);
  transition: 0.15s;
}

button:focus {
  outline: 0;
}

/* Frosted glass panel */
#container {
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  width: 33%;
  margin: 0 auto 80px;
  padding: 10px;
  border-radius: 10px;
  display: block;
  min-height: 300px;
  opacity: 0;
  transform: translateX(-50px);
  transition: opacity 0.75s, transform 0.75s;
}

.pre {
  text-align: center;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
</style>
