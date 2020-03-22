<template>
	<div>

		<section id="my-posts" class="bg-light-gray pt-4 pt-lg-5">
			<div class="container">

				<MyNav active="AliExpress" />

				<div class="text-right d-lg-none">
					<button type="button" class="btn btn-link py-3 text-gray text-lg">
						Выбрать все
					</button>
				</div>

				<div class="my-post-cards">
					<MyAliItem v-for="i in 5" :key="i" :selected="i > 1" :id="i" />
				</div>

				<div class="row align-items-center mt-3">
					<div class="col-lg text-right px-0 d-none d-lg-block">
						<button type="button" class="btn btn-link text-gray text-lg">
							Выбрать все
						</button>
					</div>
					<div class="col-lg-auto">
						<button type="button" class="btn btn-lg btn-block btn-primary">
							Добавить выбранные
						</button>
					</div>
				</div>

			</div>
		</section>
	</div>
</template>

<script>
	import MyNav from "../components/MyNav";
	import MyAliItem from "../components/MyAliItem";
	export default {
		name: "Page3",
		components: {
			MyAliItem,
			MyNav
		}
	}
</script>

<style scoped>

</style>
