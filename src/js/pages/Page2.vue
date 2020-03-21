<template>
	<div>

		<section id="my-posts" class="bg-light-gray pt-4 pt-lg-5">
			<div class="container">

				<div class="row mb-4">

					<div class="col-lg order-lg-2 mb-4 mb-lg-0">
						<button type="button" class="btn btn-lg btn-block btn-cashback text-gray">
							Вернуть 3% кэшбеком
						</button>
					</div>

					<div class="col-lg-8 col-xl-9 order-lg-1">
						<MyNav />
					</div>

					<div id="add-post-col" class="col-12 order-lg-0 mt-4 mt-lg-0 pb-lg-5 collapse">
						<div class="row">
							<div class="col-lg-8 offset-lg-2">
								<form>
									<div class="row align-items-center">
										<div class="col-lg mb-2 mb-lg-0">
											<label for="post-label" class="sr-only">Трек-код</label>
											<input type="text" id="post-label" name="label" class="form-control" placeholder="Название..." required />
										</div>
										<div class="col-lg px-lg-0 mb-2 mb-lg-0">
											<label for="post-track-code" class="sr-only">Трек-код</label>
											<input type="text" id="post-track-code" name="code" class="form-control" placeholder="Трек-код..." required />
										</div>
										<div class="col-lg-auto">
											<button type="submit" class="btn btn-secondary btn-block text-lg">
												Добавить посылку
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>

				</div>

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
