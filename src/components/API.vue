<template>
<div class="api-wrapper">
<p class="label"> API</p>


<p>
  <br>
  <p>/MATCHES</p>
  <a href="https://rmcup.herokuapp.com/matches" target="_blank">  https://rmcup.herokuapp.com/matches</a>
  </p>
    <br>
  <p>/CHAMPIONS</p>
  <a href="https://rmcup.herokuapp.com/champions" target="_blank">  https://rmcup.herokuapp.com/champions</a>
  </p>
    <br>
  <p>/GOALS</p>
  <a href="https://rmcup.herokuapp.com/goals" target="_blank">  https://rmcup.herokuapp.com/goals</a>
  </p>
    <br>
  <p>/SHUTOUTS</p>
  <a href="https://rmcup.herokuapp.com/shutouts" target="_blank">  https://rmcup.herokuapp.com/shutouts</a>
  </p>



  </div>
</template>

<script>
  export default {
    name: 'API'
  }
</script>

<style scoped>
.api-wrapper {
  letter-spacing: .4px;
  font-weight: 400;
  font-family: 'Kreon', serif;
  	max-width: 56vw;
    	padding: 20px;
	margin: 20px;
  min-height: 400px;
  background: #A4A19B;
  color: #222;
  box-shadow: 0px 0px 20px rgba(0,0,0,0.10),
0px 10px 20px rgba(0,0,0,0.05),
0px 20px 20px rgba(0,0,0,0.05),
0px 30px 20px rgba(0,0,0,0.05);
border-bottom: 4px #9B9487 solid;

}

.label {
  font-weight: 400;
  font-family: 'Kreon', serif;
  font-size: 20px;
}

a {
  text-decoration: none;
}

</style>