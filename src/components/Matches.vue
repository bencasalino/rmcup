<template>
<div class="matches">
<div v-bind:key="match.matches" v-for="match in data.matches" class="test">
<!-- <img class="icon" src="../../static/greenflag.png"/> -->
<p class="test">Name: {{ match.id }}</p>
<p class="test">Date: {{ match.date }}</p>
<p class="test">Home: {{ match.home }}</p>
<p class="test">Away: {{ match.away }}</p>
<p class="test">Score: {{ match.score }}</p>
<p class="test">Series: {{ match.series }}</p>
<br>
       </div>
      </div>
  </div>
</template>


<script>
export default {
  name: 'Matches',
  data () {
    return {
      data: []
    }
  },
  mounted () {
    this.load()
  },
  methods: {
    load () {
      fetch('http://rmcup.herokuapp.com/matches')
        .then(res => res.json())
        .then(data => {
          this.data = data
          console.log(data);
        })
    }
  }
}
</script>
<style scoped>


</style>
