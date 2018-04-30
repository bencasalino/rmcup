<template>
  <div>
      <div v-for="goal in data.shutouts" :key="goal.shutouts">
      <p>{{goal.player}}</p>
      </div>
  </div>
</template>

<script>
  import Shutouts from '@/components/Shutouts';

  export default {
    name: 'Shutouts',
    components: {
      Shutouts
      },

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
      // fetch('http://rmcup.herokuapp.com/goals')
            fetch('http://localhost:3000/shutouts')
        .then(res => res.json())
        .then(data => {
          this.data = data
          console.log(data);
        })
    }
    },
  };
</script>

<style scoped>

</style>