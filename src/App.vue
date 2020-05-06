<template>
	<div id="app">
		<Hero />
		<AboutUs />
		<!-- <router-view /> -->
	</div>
</template>

<script>
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
export default {
	name: "App",
	components: {
		Hero,
		AboutUs,
	},
};
</script>

<style lang="scss"></style>
