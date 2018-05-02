<template>
<div id="shut">
    		<h1>SHUTOUTS</h1>
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
</div>
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
      fetch('http://rmcup.herokuapp.com/shutouts')
            // fetch('http://localhost:3000/shutouts')
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
#shut {
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
  border-bottom: 2px solid #8BB8E8;
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
  border-bottom: 2px solid #8BB8E8;
}
h1 {
    border-bottom: 1px solid #8BB8E8;
            padding:10px 10px;
      color: #A4A19B;
          font-weight: 400;
          font-family: 'Kreon', serif;
          text-align: center;
}
table tr:hover {
  background: #f4f4f4;
}
table tr:hover td {
  color: #555;
}

</style>