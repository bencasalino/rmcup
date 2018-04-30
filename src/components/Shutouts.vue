<template>
<table class="zebra">
<thead>
<tr>
    <th>RANK</th>
    <th>PLAYER</th>
    <th>NATION</th>
    <th>CLUB</th>
    <th>SHUTOUTS</th>
</tr>
</thead>
<tbody>
<tr v-for="goal in data.shutouts" :key="goal.shutouts">
  <td>{{goal.rank}}</td>
  <td>{{goal.player}}</td>
  <td>{{goal.nation}}</td>
  <td>{{goal.club}}</td>
  <td>{{goal.shutouts}}</td>
</tr>
</tbody>
</table>
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