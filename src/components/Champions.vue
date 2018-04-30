<template>
<table class="zebra">
<thead>
<tr>
    <th>YEAR</th>
    <th>WINNER</th>
    <th>LOSER</th>
    <th>POINTS</th>
    <th>SERIES</th>
</tr>
</thead>
<tbody>
<tr v-for="goal in data.champions" :key="goal.champions">
  <td>{{goal.year}}</td>
  <td>{{goal.winner}}</td>
  <td>{{goal.loser}}</td>
  <td>{{goal.points}}</td>
  <td>{{goal.series}}</td>
</tr>
</tbody>
</table>
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