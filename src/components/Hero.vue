<template>
	<div class="hello">
		<h2>Meet</h2>
		<h2>Your Sheridan</h2>
		<h2>IMM2020 GRADS</h2>
		<p>See what they can do for you</p>
	</div>
</template>

<script>
export default {
	name: "Hero",
	props: {
		msg: String,
	},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
