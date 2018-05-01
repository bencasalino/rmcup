<template>
  <div>
		<div id="any">

  <router-link :to="{name: 'About'}"  class="btn"> ABOUT
	</router-link>

	<router-link :to="{name: 'History'}"  class="btn">
	HISTORY
	</router-link>

		<router-link :to="{name: 'Rules'}"  class="btn">
	RULES
	</router-link>

			<router-link :to="{name: 'Resources'}"  class="btn">
	RESOURCES
	</router-link>

				<router-link :to="{name: 'Stats'}"  class="btn">
					STATS & DATA
	</router-link>
					<router-link :to="{name: 'API'}"  class="btn">
					API
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
    name:'Section'
  }
</script>

<style scoped>

#any {
	padding: 5px;
	margin: 10px;
	/* max-width: 50vw; */
}
.btn {
font-weight: 400;
font-family: 'Kreon', serif;
padding-top: 10px;
padding-bottom: 10px;
padding-left: 30px;
padding-right: 30px;
color: #222;
background: #A4A19B;
margin: 2px;
text-decoration: none;
cursor: pointer;
box-shadow: 0px 0px 20px rgba(0,0,0,0.10),
0px 10px 20px rgba(0,0,0,0.05),
0px 20px 20px rgba(0,0,0,0.05),
0px 30px 20px rgba(0,0,0,0.05);
border-bottom: 2px #9B9487 solid;
}

.btn:hover {
	color: #333;
	background: #aaa;
}

</style>