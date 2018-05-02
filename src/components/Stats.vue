<template>
<div class="stats-wrapper">
<p class="label"> ALL TIME STATS & DATA </p>

<p>
  <br>
  <span class="emp">
  ALL TOTAL GAMES PLAYED:
  </span>
  45 </p>
<br>
<p>  <span class="emp">TOTAL CUP WINS:</span>  <img class="icon" src="/../../static/rsl.svg">RSL 9–4  <img class="icon" src="/../../static/col.svg">COL </p>
<br>
<p>  <span class="emp">TOTAL MATCHES COUNT: </span>  <img class="icon" src="/../../static/rsl.svg"> RSL 18–10–16  <img class="icon" src="/../../static/col.svg">COL </p>
<br>
<br>
<p class="label2"> PLAYOFF  & CONTINENTAL MATCHES
</p>
<p>
  <h6>The two sides have yet to meet in the
      <a href="https://www.mlssoccer.com/meta/competition/mls-playoffs">MLS Cup Playoffs </a>
    or
    <a href="https://www.concacafchampionsleague.com/">CONCACAF Champions League</a>
 </h6>
</p>
<br>
<br>
<br>
<p class="label">Crossing the Continental Divide</p>
<br>
<p>As of 2017, nine players have played for both teams in the <span class="emp"> Rocky Mountain Cup</span>.
  <br>
  <br>
   This was notably started by a trade between the two teams in 2007, in which Colorado's    <a href="">Kyle Beckerman</a> was traded to Salt Lake for <a href="">Mehdi Ballouchy</a> , both of whom became regular contributors for their new clubs. The trade also corresponded with Salt Lake's control of the <span class="emp"> Rocky Mountain Cup</span> for many years.
     <br>
  <br>
   In addition,

   <a href="">Kyle Beckerman</a>

   <a href="">Nat Borchers</a>,
    <a href="">Jeff Cunningham</a>,
     <a href="">Atiba Harris</a>,
      <a href="">Richie Kotschau</a>,
       <a href="">Clint Mathis</a>,
        <a href="">Chris Wingert</a> &
         <a href="">Luis Gil</a>, have also faced off on both sides of the rivalry.</p>
  </div>
</template>

<script>
  export default {
    name: 'Stats'
  }
</script>

<style scoped>
.stats-wrapper {
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

.emp {
  font-weight: 800;
  font-family: 'Chivo', serif;
  /* font-style:oblique; */
}
.slant {
  font-weight: 400;
  font-family: 'Chivo', serif;
  font-style: italic;
}
 a {
   text-decoration: none;
 }
  .icon {
   /* border-radius: 5px; */
     /* box-shadow: 0px 0px 20px rgba(0,0,0,0.10),
0px 10px 20px rgba(0,0,0,0.05),
0px 20px 20px rgba(0,0,0,0.05),
0px 30px 20px rgba(0,0,0,0.05); */
max-height: 20px;
min-height: 10px;
max-width: 10px;
min-width: 10px;
margin-left: 2px;
 }
</style>