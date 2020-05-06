<template>
	<div class="hello">
		<h3>About Us</h3>
		<p>
			The times might be uncertain, but our potential is iridescently
			bright. We are the upcoming designers, developers, and most
			importantly, problem solvers, who are excited to tackle the next
			challenge. If you are curious about what more the graduates can do
			for you, don’t be afraid to start a conversation. Take your time and
			flow through the web showcase of projects from design to
			development.
		</p>
	</div>
</template>

<script>
export default {
	name: "AboutUs",
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
