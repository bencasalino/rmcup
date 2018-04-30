<template>
<table class="zebra">
<thead>
<tr>
    <th>RANK</th>
    <th>PLAYER</th>
    <th>NATION</th>
    <th>CLUB</th>
    <th>GOALS</th>
</tr>
</thead>
<tbody>
<tr v-for="goal in data.goals" :key="goal.goals">
  <td>{{goal.rank}}</td>
  <td>{{goal.player}}</td>
  <td>{{goal.nation}}</td>
  <td>{{goal.club}}</td>
  <td>{{goal.goals}}</td>
</tr>
</tbody>
</table>

</template>

<script>
  import Goals from '@/components/Goals';

  export default {
    name: 'Goals',
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

table {
  border-collapse: collapse;
  width: 50vw;
}
th, td {
  padding: 0.25rem;
  text-align: left;
  border: 1px solid #ccc;
}
</style>