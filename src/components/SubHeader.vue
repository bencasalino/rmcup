<template>
  <div>
		<div id="any">

  <router-link :to="{name: 'Champions'}"  class="btn"> Champions
	</router-link>

	<router-link :to="{name: 'Goals'}"  class="btn">
	Goals
	</router-link>

	<router-link :to="{name: 'Shutouts'}"  class="btn">
	Shutouts
	</router-link>
		</div>

		<br>
			<div>
				<router-view/>
			</div>

  </div>
</template>

<script>
  export default {
    name: 'SubHeader'
  }
</script>

<style scoped>
/* .btn  {
	min-width: 200px;
max-width: 200px;
	min-width: 25vw;
text-align: center;
background: red;
font-size: 12px;
padding: 10px 22px 10px 22px;
margin: 10px;
font-weight: 900;
text-decoration: none;
cursor: pointer;
border: 2px solid blue;
} */
/* #any {
min-width: 200px;
max-width: 200px;
	min-width: 25vw;
	height: 40px;
} */

</style>