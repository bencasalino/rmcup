<template>
<div class="comp-wrapper">
  <div class="header-wrapper">
    <div class="header-left">left</div>
      <div class="header-center">center</div>
      <div class="header-right">right</div>
  </div>
<div class="wrap">
    <div id="mountain-left">
           <!-- <p id="rsl">REAL SALT LAKE</p> -->
    </div>
    <div id="mountain-center">
      <p>center</p>
      </div>
    <div id="mountain-right">
            <!-- <p id="colo">COLORADO RAPIDS</p> -->
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
.header-wrapper {
font-family: 'Kreon', serif;
  background-color: #4D3F3F;
  min-height: 10vh;
  color: white;
  display: flex;
  justify-content: space-between;

}
.wrap {
  font-family: 'Kreon', serif;
  display: flex;
    justify-content: space-between;
  min-width: 100vw;
    max-width: 100vw;

}


#mountain-left {
	/* width: 0;
	height:0;
	border-bottom: 600px solid #B30838;
	border-right: 350px solid transparent;
  background-color: #013A81; */
}

#mountain-right {
	/* width: 0;
	height: 0;
	border-bottom: 600px solid #862633;
	border-left: 350px solid transparent;
    background-color: #8BB8E8; */
}
#mountain-center {
  background-color: #4D3F3F;

}
#colo {
    padding:2px;
    font-size: 2rem;
    color: #fff;
    font-weight: 900;
    float: right;
}

#rsl {
  padding:2px;
  font-size: 2rem;
      color: #fff;
          font-weight: 900;
}

.center {

}
</style>
