<template>
	<section id="chrome-ext" class="bg-light-gray">
		<div class="container">
			<div class="row">

				<div class="col-lg-7 mb-4 mb-lg-0">
					<div class="position-relative">
						<img src="img/MacBook.png" alt="" class="w-100" />
						<Box :id="4" :blur="2" />
					</div>
				</div>
				<div class="col-lg">

					<h1 class="text-xxl">
						<span class="font-weight-bold d-block">Отслеживание и импорт посылок в один клик</span>
						<span class="d-block text-gray">с помощью удобного расширения</span>
					</h1>

					<ChromeExtButton class="my-4" />

					<div class="text-gray">
						<div>
							Импорт и отслеживание посылок из Китая,
							России и др. в личный кабинет сервиса Trackgo.ru
						</div>

						<div class="my-3">
							Расширение импортирует быстро и удобно все ваши покупки
							из популярных магазинов, таких как "Aliexpress", "Jd", "GearBest" и др.
						</div>

						<div>
							Согласитесь, копировать каждый трек-код из магазина
							в сервис для отслеживания - очень не удобно. Мы сделали для
							Вас удобный инструмент для импорта посылок
							в личный кабинет сервиса по отслеживанию посылок "Trackgo.ru"
						</div>
					</div>

				</div>

			</div>
		</div>
	</section>
</template>

<script>
	import ChromeExtButton from "../components/ChromeExtButton";
	import Box from "../components/Box";
	export default {
		name: "Page5",
		components: {
			Box,
			ChromeExtButton
		}
	}
</script>

<style scoped>

</style>
