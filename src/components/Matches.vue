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
      fetch('http://rmcup.herokuapp.com/matches')
      // fetch('http://localhost:3000/matches')
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
  box-sizing: border-box;
  min-width: 100%;
border-left:  5px solid #666;
border-bottom:  5px solid #555;
padding-left:12px;
padding-bottom:12px;
padding-right:12px;
	 background: linear-gradient(to bottom,#444 , #333);
/* margin-left:12px;
margin-bottom:12px; */
margin-left:22px;
}
table {
    border-collapse: collapse;
  border: 1px solid #eee;
  border-bottom: 2px solid #444;
  font-family: 'Kreon', serif;
  border-collapse: collapse;
  width: 100%;
  font-weight: 400;
  box-shadow: 0px 0px 20px rgba(0,0,0,0.10),
     0px 10px 20px rgba(0,0,0,0.05),
     0px 20px 20px rgba(0,0,0,0.05),
     0px 30px 20px rgba(0,0,0,0.05);
}
th, td {
  padding: 0.25rem;
  text-align: left;
  border: 1px solid #eee;
  font-size: 12px;
    background: #222;
}

th {
  background: #333;
font-size: 10px;
color: #A4A19B;
  border-bottom: 2px solid #eee;
}
h1 {
  padding:5px 10px;
      color: #A4A19B;
          font-weight: 400;
          font-family: 'Kreon', serif;
          text-align: center;
                 padding:5px 10px;
}
table tr:hover {
  background: #f4f4f4;
}
table tr:hover td {
  color: #555;
}

</style>
