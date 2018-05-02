<template>
<div class="rules-wrapper">
<p class="label"> RULES</p>
<br>
<p class="label2"> TIEBREAKERS</p>

<p>
  PRECEDENCE ORDER
  <br>
    <br>
<ul>
<li> <span class="emp">  1) </span>  Goal Difference</li>
<li><span class="emp"> 2)  </span> Away Goals   <span class="slant">(prior to 2008) </span></li>
<li><span class="emp"> 3)  </span> Previous Year Winners retain Cup</li>
</ul>
</p>
<br>
<p>
  *If the teams end the season in a points tie, the team with the most goals on aggregate will win <span class="slant">(for a two-team competition, this is equivalent to goal differential).</span> If the teams are tied on aggregate goals, the current holders retain the Cup for another year.
</p>
<br>
<p class="label2"> REGULAR SEASON TIEBREAKER</p>
<br>
<p>
Only MLS regular season matches played between Colorado Rapids and Real Salt Lake counted towards records, while own goals not counted towards the total.

<br>
<br>
If players are tied for a stat, the player who has most recently accomplished the stat is listed first.
</p>
<br>
<div class="meh">
  <br>
  <img class="baseicon" src="/../../static/rsl.svg">
  <img class="baseicon" src="/../../static/col.svg">
</div>


  </div>
</template>

<script>
  export default {
    name:'Rules'
  }
</script>

<style scoped>
.rules-wrapper {
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
.slant {
  font-weight: 400;
  font-family: 'Chivo', serif;
  font-style: italic;
}
.emp {
  font-weight: 800;
  font-family: 'Chivo', serif;
  /* font-style:oblique; */
}
.meh {
  display: flex;
  justify-content: center;
}
 .baseicon {
   /* border-radius: 5px; */
     /* box-shadow: 0px 0px 20px rgba(0,0,0,0.10),
0px 10px 20px rgba(0,0,0,0.05),
0px 20px 20px rgba(0,0,0,0.05),
0px 30px 20px rgba(0,0,0,0.05); */
max-height: 60px;
min-height: 60px;
max-width: 40px;
min-width: 40px;
margin-left: 12px;
 }
</style>