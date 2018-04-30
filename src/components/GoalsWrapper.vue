<template>
  <div>
      <Goals v-for="goal in data.goals" :goal="goal" :key="goal.goals"> </Goals>
  </div>
</template>

<script>
  import Goals from '@/components/Goals';

  export default {
    name: 'GoalsWrapper',
    components: {
      Goals
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
      fetch('http://rmcup.herokuapp.com/goals')
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


export default {
  data () {
    return {
      data: []
    }
  },
  methods: {
    load () {
      fetch('https://protected-meadow-94841.herokuapp.com/')
        .then(res => res.json())
        .then(data => {
          this.data = data
          // console.log(data);
        })
    }
  },
  components: {
    Card
  }
}