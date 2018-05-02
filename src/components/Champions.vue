<template>
<div id="champs">
    		<h1>CHAMPIONS</h1>
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
      fetch('https://rmcup.herokuapp.com/champions')
            // fetch('http://localhost:3000/champions')
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
#champs {
/* border-left:  2px solid #00cccc; */
padding-left:12px;
padding-bottom:12px;
padding-right:12px;

margin-left:12px;
margin-bottom:12px;
margin-right:12px;
}
table {
    border-collapse: collapse;
  border: 1px solid #eee;
  border-bottom: 2px solid #ECDD51;
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
  border-bottom: 2px solid #ECDD51;
}
h1 {
    border-bottom: 1px solid #ECDD51;
      color: #A4A19B;
          font-weight: 400;
          font-family: 'Kreon', serif;
          text-align: center;
            padding:10px 10px;
}
table tr:hover {
  background: #f4f4f4;
}
table tr:hover td {
  color: #555;
}

</style>