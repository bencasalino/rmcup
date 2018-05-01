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
					STATISTICS
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
.btn {
	padding: 10px;
	color: red;
	background: white;
	margin: 2px;
}

.btn:hover {
	color: white;
	background: red;
}

</style>