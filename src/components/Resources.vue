<template>
<div class="res-wrapper">
<p class="label"> TEAM RESOURCES  & LINKS</p>
<br>
<br>
<!-- // header -->


<div class="res-split">



<div>
  <p>
  <span class="com-rsl">
    <img class="icon" src="/../../static/rsl.svg">
    REAL SALT LAKE
    </span>
  </p>
  <br>
  <!-- end header -->
  <p>
<a class="btn-rsl" href="https://www.rsl.com">TEAM WEBSITE</a>
</p>

<p>
<br>
<br>
<a class="btn-rsl" href="https://www.mlssoccer.com/standings">STANDINGS</a>
</p>

<p>
<br>
<br>
<a class="btn-rsl" href="https://matchcenter.mlssoccer.com/schedule?clubs%5B0%5D=Real%20Salt%20Lake">SCHEDULE</a>
</p>

<p>
<br>
<br>
<p class="com-rsl"> SUPPORTERS GROUP</p>
<br>

<a class="btn-rsl" href="https://www.rsl.com/supporters">ROYAL ARMY
</a>
</p>
</div>

<!-- // split -->
<div>
  <p>
    <span class="com-rsl">
    <img class="icon" src="/../../static/col.svg">
    COLORADO RAPIDS</span>
  </p>
  <br>
  <!-- end header -->
<p>
<a class="btn-col" href="https://www.coloradorapids.com">TEAM WEBSITE</a>
</p>

<p>
<br>
<br>
<a class="btn-col" href="https://www.mlssoccer.com/standings">STANDINGS</a>
</p>

<p>
<br>
<br>
<a class="btn-col" href="https://matchcenter.mlssoccer.com/schedule?clubs%5B0%5D=Colorado%20Rapids">SCHEDULE</a>
</p>

<p>
<br>
<br>
<p class="com-col"> SUPPORTERS GROUP</p>
<br>

<a class="btn-col" href="http://www.c38sg.com/">CENTENNIAL
38</a>
</p>
</div>
</div>



  </div>
</template>

<script>
  export default {
    name: 'Resources'
  }
</script>

<style scoped>
.res-wrapper {
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
 .res-split {
display: flex;
justify-content: space-around;
}

.btn-col {
font-weight: 400;
font-family: 'Kreon', serif;
padding-top: 4px;
padding-bottom: 4px;
padding-left: 20px;
padding-right: 20px;
color: #8BB8E8;
background: #862633;
margin: 2px;
text-decoration: none;
cursor: pointer;
box-shadow: 0px 0px 20px rgba(0,0,0,0.10),
0px 10px 20px rgba(0,0,0,0.05),
0px 20px 20px rgba(0,0,0,0.05),
0px 30px 20px rgba(0,0,0,0.05);
border-bottom: 2px #9B9487 solid;
box-sizing: content-box;
}
.btn-rsl {
font-weight: 400;
font-family: 'Kreon', serif;
padding-top: 4px;
padding-bottom: 4px;
padding-left: 20px;
padding-right: 20px;
color: #F5E700;
background: #013A81;
margin: 2px;
text-decoration: none;
cursor: pointer;
box-shadow: 0px 0px 20px rgba(0,0,0,0.10),
0px 10px 20px rgba(0,0,0,0.05),
0px 20px 20px rgba(0,0,0,0.05),
0px 30px 20px rgba(0,0,0,0.05);
border-bottom: 2px #9B9487 solid;
box-sizing: content-box;
}

.btn:hover {
	color: #333;
	background: #aaa;
	border-bottom: 5px #333 solid;
box-sizing: content-box;
	text-decoration: none;
cursor: pointer;
}

</style>