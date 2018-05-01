<template>
<table class="zebra">
<thead>
<tr>
    <th>NAME</th>
    <th>DATE</th>
    <th>HOME</th>
    <th>AWAY</th>
    <th>SCORE</th>
    <th>SERIES</th>
</tr>
</thead>
<tbody>
<tr v-for="goal in data.matches" :key="goal.matches">
    <td>{{goal.id}}</td>
  <td>{{goal.date}}</td>
  <td>{{goal.home}}</td>
  <td>{{goal.away}}</td>
  <td>{{goal.score}}</td>
  <td>{{goal.series}}</td>
</tr>
</tbody>
</table>


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
      fetch('http://localhost:3000/matches')
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
