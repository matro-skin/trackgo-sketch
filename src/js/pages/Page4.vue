<template>
	<div>
		<section id="my-posts" class="bg-light-gray pt-4 pt-lg-5">
			<div class="container">

				<MyNav active="AliExpress" />

				<h1 class="text-xxl font-weight-bold">Установите расшрение <br />
					и импортируйте товары из AliExpress</h1>

				<ChromeExtButton class="my-4" />

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
	import ChromeExtButton from "../components/ChromeExtButton";
	export default {
		name: "Page4",
		components: {
			ChromeExtButton,
			MyNav
		}
	}
</script>
