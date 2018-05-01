<template>
<div class="history-wrapper">
<p class="label"> HISTORY & FORMATION</p>
<br>
<p>When it was officially announced that Salt Lake City would be awarded an MLS expansion club, fans from Utah and Colorado founded the bi-partisan  <span class="emp"> Committee of 10</span>

  <span class="slant">
  (5 supporters from each club)
  </span>
   and began to outline the official rules of the competition. The contest was named the Rocky Mountain Cup after a vote from the fans, and a trophy was acquired.</p>
<br>
<p class="label2"> FORMATION | C10</p>
<p>
 <span class="emp"> Committee of 10</span>, or C10, was initially formed through discussions between fans from both <a href=""> Real Salt Lake</a> and the <a href="">Colorado Rapids</a>  on
<a href="">BigSoccer.com</a>

 and on the now defunct fan forums at
 <a href="">RealSaltLake.org.</a>
 .
  It was decided that each team's fans would be represented by five individuals per side.
  <br>
  <br>
   These representatives would be responsible for creating the guidelines, design, and ultimately raising the funds to create the <span class="emp"> Rocky Mountain Cup</span>
</p>
<br><br>
<p class="label2">
THE ORIGINAL COMMOTTEE OF 10
</p>
<p class="committee"><span class="com-col">
  <img class="icon" src="/../../static/col.svg">
  COL:</span>
Jason Maxwell* |
Mark Bodmer |
Bill Fisher |
	Jeremy Vanderlan |
  	Jason Greene
</p>
<br>
<p class="committee"><span class="com-rsl">   <img class="icon" src="/../../static/rsl.svg">RSL:</span> Gary Hadley | Juliana Montgomery
|
Eric Roberts
|
Glenn Webb
|
Neil Wyler
</p>
<br>
<p class="label2">*ORIGINAL CHAIRMAN</p>
  </div>
</template>

<script>
  export default {
    name: 'History'
  }
</script>

<style scoped>
.history-wrapper {
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
.committee {
    font-size: 12px;

}

.com-rsl {
    font-weight: 900;
  color: #013A81;
}
.com-col {
      font-weight: 900;
  color: #862633;
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
max-height: 30px;
min-height: 20px;
max-width: 20px;
min-width: 20px;
margin-left: 2px;
 }

</style>