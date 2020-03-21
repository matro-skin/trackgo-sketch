<template>
	<div>
		<Header />
		<main id="main">
			<router-view></router-view>
		</main>
		<Footer />
	</div>
</template>

<script>
	import Footer from "./Footer";
	import Header from "./Header";
	export default {

		name: "Layout",

		components: {
			Header,
			Footer
		}

	}
</script>

<style scoped>

</style>
