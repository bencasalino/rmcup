<template>
<div class="api-wrapper">
<p class="label"> PUBLIC API & DATABASE </p>
<br>
<div class="api-split">
<div>
 <p class="label2">WHAT IS THIS?</p>
  <p>This is a full RESTful API linked to an extensive database detailing everything about the Rocky Mountain Cup series.</p>
  <br>
  <div class="api-routes">
<p class="supa-bold">ex: https://rmcup.herokuapp.com/{endpoint}</p>
<br>
<p class="api-label">/MATCHES</p>
<a class="api-label" href="https://rmcup.herokuapp.com/matches" target="_blank">  https://rmcup.herokuapp.com/matches</a>
<br>
<br>
<p class="api-label">/CHAMPIONS</p>
<a  class="api-label" href="https://rmcup.herokuapp.com/champions" target="_blank">  https://rmcup.herokuapp.com/champions</a>
<br>
<br>
<p class="api-label">/GOALS</p>
<a class="api-label" href="https://rmcup.herokuapp.com/goals" target="_blank">  https://rmcup.herokuapp.com/goals</a>
<br>
<br>
<p class="api-label">/SHUTOUTS</p>
<a class="api-label" href="https://rmcup.herokuapp.com/shutouts" target="_blank">  https://rmcup.herokuapp.com/shutouts</a>
</div>
</div>
<br>
<div>
 <p class="label2">WHERE DO I START?</p>
  <p>Calling any API endpoint without a resource ID or name will return a paginated list of available resources for that API. </p>
  <br>
    <div class="code-ex">
      <code>
        {
          <br>
"id": 19,          <br>
"date": "September 25, 2010",          <br>
"home": "RSL",          <br>
"away": "COL",          <br>
"score": "1-1",          <br>
"series": "COL 8-6-5"          <br>
}       <br>
      </code>
    </div>
  </div>
</div>

  <!-- wrapper -->
  </div>
</template>

<script>
  export default {
    name: 'API'
  }
</script>

<style scoped>
.api-wrapper {
  font-weight: 400;
  font-family: 'Chivo', serif;
  	max-width: 56vw;
    padding-top: 20px;
     padding-left: 20px;
      padding-right: 20px;
	margin: 20px;
          font-size: 14px;
  min-height: 400px;
  background: #A4A19B;
  color: #222;
  box-shadow: 0px 0px 20px rgba(0,0,0,0.10),
0px 10px 20px rgba(0,0,0,0.05),
0px 20px 20px rgba(0,0,0,0.05),
0px 30px 20px rgba(0,0,0,0.05);
border-bottom: 4px #9B9487 solid;
border-top: 4px #9B9487 solid;
box-sizing: content-box;

}

.label {
  font-weight: 400;
  font-family: 'Chivo', serif;
  font-size: 20px;
}

.label2 {
  font-weight: 400;
  font-family: 'Chivo', serif;
  font-size: 12px;
  /* border-bottom: 4px #9B9487 solid; */
      padding-bottom: 10px;
}

.api-label {
    font-weight: 400;
  font-family: 'Chivo', serif;
  font-size: 12px;
  /* border-bottom: 4px #9B9487 solid; */
      padding-bottom: 10px;
      /* text-transform: uppercase; */

}


a {
  text-decoration: none;
}
 a:hover {
   text-decoration: none;
   color:#111;
 }

.api-split {
display: flex;
justify-content: space-between;
}

.code-ex {
    font-weight: 400;
  font-family: 'Kreon', serif;
  font-size: 20px;
  padding: 33px;
  background-color: #333;
  color: #aaa;
  max-width: 200px;  box-shadow: 0px 0px 20px rgba(0,0,0,0.10),
0px 10px 20px rgba(0,0,0,0.05),
0px 20px 20px rgba(0,0,0,0.05),
0px 30px 20px rgba(0,0,0,0.05);
border-bottom: 4px #9B9487 solid;
}

.supa-bold {
    background-color: #333;
  color: #aaa;
  border-bottom: 4px #9B9487 solid;
  font-weight: 900;
  /* font-style: italic; */
  /* background-color: #aaa; */
  max-width: 320px;
  padding: 5px;
}
</style>