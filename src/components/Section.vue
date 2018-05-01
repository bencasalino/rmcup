<template>
  <div>
		<div id="any">

  <router-link :to="{name: 'About'}"  class="btn"> About
	</router-link>

	<router-link :to="{name: 'History'}"  class="btn">
	History
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

</style>