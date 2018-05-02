<template>
  <div id="foot">
    <p>|&nbsp;COPYRIGHT   &copy;  2018&nbsp;|&nbsp;
      <a href="https://github.com/bencasalino/rmcup">GITHUB</a>&nbsp;|&nbsp;
            <a href="https://bencasalino.com/">CONTACT</a>&nbsp;|&nbsp;
                  <a href="https://rmcup.herokuapp.com/matches">PUBLIC API</a>&nbsp;|
    </p>
    <br>
    <p class="dont-sue-me">~All logos are copyright of their respective owners.~</p>
                    <img class="footrr" src="/../../static/duel.svg">

  </div>
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style scoped>
#foot {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 10vh;
  color: #222;
  border-top: 4px solid #9B9487;
  background: #A4A19B;
             box-shadow: 0px 0px 20px rgba(0,0,0,0.10),
0px 10px 20px rgba(0,0,0,0.05),
0px 20px 20px rgba(0,0,0,0.05),
0px 30px 20px rgba(0,0,0,0.05);
    font-size: .3rem;
font-family: 'Chivo', sans-serif;
      font-weight: 400;
}
.dont-sue-me {
    font-size: 6px;
    /* font-style: italic; */
}
a {
  text-decoration: none;
}
.footrr {
  min-height: 30px;
  min-width: 30px;
    max-height: 30px;
  max-width: 30px;
}
</style>