<template>
	<div>

		<section id="my-posts" class="bg-light-gray pt-4 pt-lg-5">
			<div class="container">

				<MyNav />

				<div class="my-post-cards">
					<MyPostItem v-for="i in 5" :key="i" :active="i === 2" />
				</div>

				<div class="pt-4">
					<a href="#" class="text-lg text-gray">Посмотреть архив</a>
				</div>

			</div>
		</section>
	</div>
</template>

<script>
	import MyPostItem from "../components/MyPostItem";
	import MyNav from "../components/MyNav";
	export default {
		name: "Page2",
		components: {MyNav, MyPostItem}
	}
</script>

<style scoped>

</style>
