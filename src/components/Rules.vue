<template>
<div class="rules-wrapper">
<p class="label"> RULES</p>
<br>
<p class="label"> TIEBREAKER</p>
<br>
<p> Tiebreakers: 1) Goal Difference, 2) Away Goals (prior to 2008, when teams played an equal number of home games; never used), 3) Previous Year Winners retain Cup
</p>
<br>
<p>
  If the teams end the season in a points tie, the team with the most goals on aggregate will win (for a two-team competition, this is equivalent to goal differential). If the teams are tied on aggregate goals, the current holders retain the Cup for another year.
</p>
<br>
<p class="label"> REGULAR SEASON TIEBREAKER</p>
<br>
<p>
Only MLS regular season matches played between Colorado Rapids and Real Salt Lake counted towards records.
<br>
<br>
Own goals not counted
<br>
<br>
If players are tied for a stat, the player who has most recently accomplished the stat is listed first.
</p>
  </div>
</template>

<script>
  export default {
    name:'Rules'
  }
</script>

<style scoped>
.rules-wrapper {
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
</style>