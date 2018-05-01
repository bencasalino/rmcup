<template>
<div id="matches">
  		<h1>ALL PAST MATCHES</h1>
<table class="zebra">
<thead>
<tr>
    <th>#</th>
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
#matches {
    margin: 5px;
}
table {
  font-family: 'Kreon', serif;
  border-collapse: collapse;
  width: 100%;
            font-weight: 400;
}
th, td {
  padding: 0.25rem;
  text-align: left;
  border: 1px solid #ccc;
  font-size: 12px;
}

th {
font-size: 10px;
color: #222;
}
h1 {
      color: #fff;
          font-weight: 400;
          font-family: 'Kreon', serif;
          text-align: center;
}

</style>
