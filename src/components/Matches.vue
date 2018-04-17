<template>
  <div class="matches">
          <div v-bind:key="match.matches" v-for="match in data.matches" class="FullGameInfoCard">
          <!-- <img class="icon" src="../../static/greenflag.png"/> -->
        <p class="game-id">Name: {{ match.id }}</p>

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
      fetch('http://localhost:3000/')
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
