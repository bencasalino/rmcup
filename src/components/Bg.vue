<template>
<div id="wrap">
      <div class="header-top">
          <div class="header-left">
              <div class="past-champs">
          <img class="logo" src="/../../static/m-rsl.svg">
              <p class="year"> 2007</p>
              </div>

              <div class="past-champs">
                  <img class="logo" src="/../../static/m-rsl.svg">
              <p class="year"> 2008</p>
              </div>

              <div class="past-champs">
                  <img class="logo" src="/../../static/m-rsl.svg">
              <p class="year"> 2009</p>
              </div>

              <div class="past-champs">
                  <img class="logo" src="/../../static/m-rsl.svg">
              <p class="year"> 2010</p>
              </div>

              <div class="past-champs">
                  <img class="logo" src="/../../static/m-rsl.svg">
              <p class="year"> 2011</p>
              </div>

              <div class="past-champs">
                  <img class="logo" src="/../../static/m-rsl.svg">
              <p class="year"> 2012</p>
              </div>

              <div class="past-champs">
                  <img class="logo" src="/../../static/m-rsl.svg">
              <p class="year"> 2014</p>
              </div>

              <div class="past-champs">
                  <img class="logo" src="/../../static/m-rsl.svg">
              <p class="year"> 2016</p>
              </div>

              <div class="past-champs">
                  <img class="logo" src="/../../static/m-rsl.svg">
              <p class="year"> 2017</p>
              </div>
    </div>
<!-- <div class="header-center">
<p class="thisthis">
<span class="thisthis">
TOTAL MATCHES:
</span>
45 </p>
<br>
<p class="thisthis">  <span class="thisthis">CUP WINS:</span>  <img class="supa" src="/../../static/rsl.svg">RSL 9–4  <img class="supa" src="/../../static/col.svg">COL </p>
<br>
<p class="thisthis">  <span class="thisthis">TOTAL GAMES: </span>  <img class="supa" src="/../../static/rsl.svg"> RSL 18–10–16  <img class="supa" src="/../../static/col.svg">COL </p>
<br>
</div> -->
<!-- // split -->
          <div class="header-right">
              <div class="past-champs">
          <img class="logo" src="/../../static/m-col.svg">
              <p class="year"> 2015</p>
              </div>

              <div class="past-champs">
                  <img class="logo" src="/../../static/m-col.svg">
              <p class="year"> 2013</p>
              </div>

                  <div class="past-champs">
                  <img class="logo" src="/../../static/m-col.svg">
              <p class="year"> 2006</p>
              </div>

                  <div class="past-champs">
                  <img class="logo" src="/../../static/m-col.svg">
              <p class="year"> 2005</p>
              </div>
          </div>
      </div>
</div>
</template>

<script>
/* eslint-disable */
export default {
  name: "Bg",
  data() {
    return {
    };
  }
};
</script>

<style>
#wrap {
      border-bottom: .2rem solid #aaa;
}

.header-top {
    padding-top:8px;
  background: linear-gradient(to right, #B30838 , #862633);
  height: 10vh;
    justify-content: space-between;
  display: flex;
}
.header-right {
flex-direction: row;
    justify-content: space-between;
  display: flex;
  /* width: 150px; */
}
.header-left {
    justify-content: space-between;
  display: flex;
  /* width: 150px; */
}
.header-center {
  text-align: center;
flex-direction: column;
    justify-content: space-between;
  display: flex;
  /* margin-top:8px;
  margin-right:3rem; */
}

.logo {
  max-height: 2rem;
  max-width: 2rem;
    min-height: 2rem;
  min-width: 2rem;
}

.supa {
  max-height: 20px;
  max-width: 20px;
    min-height: 20px;
  min-width: 20px;
}
.year {
    margin-top:4px;
      color: #fff;
    font-size: .3rem;
font-family: 'Chivo', sans-serif;
      font-weight: 400;
}
.past-champs {
  margin-right:.2rem;
      display: flex;
        align-items: center;
  flex-direction: column;
}

.thisthis {
      font-size: .3rem;
}

</style>