<template>
	<div>
		<section id="my-posts" class="bg-light-gray pt-4 pt-lg-5">
			<div class="container">

				<MyNav active="AliExpress" />

				<h1 class="text-xxl font-weight-bold">Установите расшрение <br />
					и импортируйте товары из AliExpress</h1>

				<button type="button" class="btn btn-lg btn-primary btn-chrome my-4">
					Установить для Google Chrome
					<span><img src="img/chrome.png" alt="Установите расшрение и импортируйте товары из AliExpress" /></span>
				</button>

				<div class="text-gray">
					Мы бережно импортируем все Ваши посылки в личный кабинет и будем <br />
					следить за их статусами, чтобы Вы ничего не пропустили.
				</div>

			</div>
		</section>
	</div>
</template>

<script>
	import MyNav from "../components/MyNav";
	export default {
		name: "Page4",
		components: {
			MyNav
		}
	}
</script>

<style scoped>

</style>
