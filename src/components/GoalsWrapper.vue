<template>
  <div>
      <div v-for="goal in data.goals" :key="goal.goals">
         <p>{{goal.club}}</p>
            <p>{{goal.player}}</p>


      </div>
  </div>
</template>

<script>
  import GoalsWrapper from '@/components/GoalsWrapper';

  export default {
    name: 'GoalsWrapper',
    components: {
      GoalsWrapper
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
            fetch('http://localhost:3000/goals')
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