<template>
<div class="comp-wrapper">
  <!-- <div class="header-wrapper">
    <div class="header-left">REAL SALK LAKE</div>
      <div class="header-center">center</div>
      <div class="header-right">right</div>
  </div> -->
<div class="wrap">
    <div id="mountain-left">
           <p id="rsl">    <img class="baseicon" src="/../../static/rsl.svg"> REAL SALT LAKE</p>
    </div>
    <div id="mountain-center">
      <h3>ROCKY MOUNTAIN CUP </h3>
      </div>
    <div id="mountain-right">
            <p id="colo">COLORADO RAPIDS     <img class="baseicon" src="/../../static/col.svg"></p>
    </div>
  </div>
  </div>

</template>

<script>
export default {
  name: 'Header',
  data () {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comp-wrapper {
    background: linear-gradient(to right,#B30838 , #862633);

}


.header-wrapper {
font-family: 'Kreon', serif;
  /* background-color: #4D3F3F; */
  min-height: 10vh;
  color: white;
  display: flex;
  justify-content: space-between;

}
.wrap {
  font-family: 'Kreon', serif;
  display: flex;
    justify-content: space-between;
  /* min-width: 100vw;
    max-width: 100vw; */

}


#mountain-left {
	/* width: 0;
	height:0;
	border-bottom: 600px solid #B30838;
	border-right: 350px solid transparent;
  background-color: #013A81; */
     border-bottom: 5px #013A81 solid;
}

#mountain-right {
	/* width: 0;
	height: 0;
	border-bottom: 600px solid #862633;
	border-left: 350px solid transparent;
    background-color: #8BB8E8; */
         border-bottom: 5px #8D9093 solid;
}
#mountain-center {
      padding-top:5px;
  /* background-color: #4D3F3F; */
      font-size: 1.5rem;

}
#colo {
    padding:2px;
    font-size: 1rem;
    color: #8BB8E8;
    font-weight: 900;
    float: right;
}

#rsl {
  padding:2px;
  font-size: 1rem;
      color: #F5E700;
          font-weight: 900;
          font-family: 'Kreon', serif;
}

h3 {
  border-bottom: 4px solid #A4A19B;
    font-size: 2rem;
    color: #A4A19B;
   font-weight: 900;
          font-family: 'Kreon', serif;
}

 .baseicon {
   /* border-radius: 5px; */
     /* box-shadow: 0px 0px 20px rgba(0,0,0,0.10),
0px 10px 20px rgba(0,0,0,0.05),
0px 20px 20px rgba(0,0,0,0.05),
0px 30px 20px rgba(0,0,0,0.05); */
max-height: 40px;
/* min-height: 40px; */
max-width: 25px;
/* min-width: 25px; */
/* margin-left: 12px; */
 }
</style>
