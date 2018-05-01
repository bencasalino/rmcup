<template>
<div class="about-wrapper">
<p class="label"> ABOUT THE CUP</p>
<br>
<p>
<span class="emp">The Rocky Mountain Cup</span> is a soccer trophy contested between <a href=""> Real Salt Lake</a>  and the <a href="">Colorado Rapids</a> . The cup is awarded by the <a href="https://en.wikipedia.org/wiki/Rocky_Mountain_Cup#The_Committee_of_10">Committee of 10,</a>
, a group of bi-partisan fans who run the competition, to the team with the most points in games played between the two.
<br>
<br>
 The teams are awarded 3 points for each win and 1 point for each tie in regular season MLS games against each other. The Cup is awarded at the conclusion of the deciding game of the series between the two teams.
<br>
<br>
If the teams end the season in a points tie, the team with the most goals on aggregate will win
<span class="slant"> (for a two-team competition, this is equivalent to goal differential)</span>. If the teams are tied on aggregate goals, the current holders retain the Cup for another year.
<br>
<br>
<p class="label2"> CUP CREATION</p>
The Cup was created in 2005, the first year of play for <a href=""> Real Salt Lake</a> in Major League Soccer. When it was officially announced that Salt Lake City would be awarded an MLS expansion club, fans from Utah and Colorado founded the bi-partisan <a href="https://en.wikipedia.org/wiki/Rocky_Mountain_Cup#The_Committee_of_10">Committee of 10,</a> <span class="slant">  (5 supporters from each club) </span> and began to outline the official rules of the competition. The contest was named the <span class="emp"> Rocky Mountain Cup</span>  after a vote from the fans, and a trophy was acquired.
<br>
<br>
<p class="label2"> INAGURAL CUP</p>
<span class="emp">The Rocky Mountain Cup</span> began on April 16, 2005 at Real Salt Lake's inaugural home game, in which Real earned their first-ever win with a 1–0 victory. Colorado eventually won the trophy in 2005 after besting Real in the three subsequent matches that season, officially clinching the Cup at their final meeting of the year at Rice-Eccles Stadium.
</p>
</div>
</template>

<script>
  export default {
    name: 'About'
  }
</script>

<style scoped>

.about-wrapper {
  /* letter-spacing: .4px; */
  font-weight: 400;
  font-family: 'Chivo', serif;
  	max-width: 56vw;
    padding-top: 20px;
     padding-left: 20px;
      padding-right: 20px;
        font-size: 14px;
	margin: 20px;
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

</style>