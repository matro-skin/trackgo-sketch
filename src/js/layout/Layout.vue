<template>
	<div>
		<Header />
		<main id="main">
			<router-view></router-view>
		</main>
		<Footer />
		<Dev />
	</div>
</template>

<script>
	import Footer from "./Footer";
	import Header from "./Header";
	import Dev from "../components/Dev";
	export default {

		name: "Layout",

		components: {
			Header,
			Footer,
			Dev
		},

		methods: {
			showDrawer() {
				document.body.classList.toggle('drawer-opened');
			}
		},

		created() {
			this.$root.$on('drawer', this.showDrawer)
		}

	}
</script>
