<template>
  <div>
      <div v-for="goal in data.champions" :key="goal.champions">
      <p>{{goal.year}}</p>
      </div>
  </div>
</template>

<script>
  import Champions from '@/components/Champions';

  export default {
    name: 'Champions',
    components: {
      Champions
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
            fetch('http://localhost:3000/champions')
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