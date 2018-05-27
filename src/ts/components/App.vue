<template>

<div id="#app">
	<nav class="navbar is-fixed-top">
		<div class="navbar-brand">
			<a class="button">Home</a>
			<a class="button">Settings</a>
		</div>
	</nav>

	<div>
		{{ greeting }} from App.vue!
	</div>
</div>

</template>

<script lang="ts">

import Vue from "vue"
export default Vue.extend({
	data: () => {
		return {
			greeting: "Hello"
		}
	}
})

</script>

